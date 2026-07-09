# Performance Overhaul + Vite Migration Plan

Portfolio: https://syedmuhammadabid.github.io/ (CRA + React 16, GitHub Pages, no SSR)

## Goal

Improve Mobile PageSpeed while preserving CLS=0, SEO=100, Best Practices=96, all links, and mobile responsiveness.

| Metric      | Current | Target  |
| ----------- | ------- | ------- |
| Performance | 48 🔴   | 80+     |
| FCP         | 5.3s 🔴 | ~1.5s   |
| LCP         | 6.0s 🔴 | ~2.0s   |
| TBT         | 540ms 🔴| ~150ms  |
| Speed Index | 7.8s 🔴 | <3.4s   |
| CLS         | 0 ✅    | 0 (keep)|

## Decisions

- **Splash screen:** DISABLE (`splashScreen.enabled=false`) — a forced 2s Lottie splash renders before the hero and caps LCP.
- **react-reveal:** Remove `<Fade>` from the hero only; lazy-load the remaining sections.
- **Vite migration:** PRIMARY approach — replace CRA/`react-scripts`.
- **Verification:** Local `npm run build` + `source-map-explorer` analysis.

## Key Codebase Findings (differ from generic guidance)

- **No `react-icons`.** Icons come from a render-blocking **FontAwesome full CSS CDN** in `<head>` plus `react-easy-emoji`.
- **Animation library is `react-reveal`** (`<Fade>`/`<Slide>`) used in ~20 files, including wrapping the hero.
- Heavy deps: `lottie-react` (landingPerson, splash, email), `colorthief` (ExperienceCard), `react-twitter-embed`.
- Entry uses `ReactDOM.render` (React 16) — the inline shell is **replaced**, not hydrated (no mismatch risk).
- `Main.js` eager-imports all 14 sections.
- `require("...asset")` used for images/logos/resume in `portfolio.js`, `Greeting.js`, `Contact.js`, `skillProgress.js`, `Skills.js` — must convert to ESM imports for Vite.
- Only in-app `process.env` usage is `serviceWorker.js`; `fetch.js` is a Node build script (keep, uses dotenv).
- LCP element = hero `<h1>` (`greeting.title`), Montserrat font.
- `homepage` is a root user page → Vite `base: '/'` is correct (CRA `homepage` field becomes irrelevant).
- **All source files are `.js` containing JSX** — Vite needs an esbuild loader override to parse JSX in `.js`.
- Fonts are **self-hosted** via `@font-face` in `src/index.css` (`src/assets/fonts/Montserrat-Regular.ttf`, `Agustina.woff`) — **not Google Fonts** — and currently lack `font-display: swap`. Existing `<link rel=preload>` font hints in `index.html` point to stale CRA build hashes and a wrong `type`.
- Old CommonJS deps (`react-reveal`, `react-headroom`, `react-twitter-embed`, `colorthief`, `react-easy-emoji`) need Vite `optimizeDeps` handling.
- `public/` holds favicons, manifest, `og-banner.png`, and the fetched `profile.json`/`blogs.json` — Vite serves this dir at root, so only `index.html` moves out.

## Phases

### Phase 0 — Safety
1. Create a branch.
2. Capture baseline PageSpeed and `npm run build` bundle sizes.

### Phase 1 — Vite Migration (foundation; blocks the rest)
1. Add `vite`, `@vitejs/plugin-react`, `sass`; remove `react-scripts`. Add `vite.config.js`:
   - `base: '/'`, `build.outDir: 'build'`, `build.sourcemap: false`, react plugin.
   - **JSX-in-`.js`**: `esbuild: { loader: 'jsx', include: /src\/.*\.js$/ }` **and** `optimizeDeps.esbuildOptions.loader = { '.js': 'jsx' }` (required — the build fails otherwise).
   - **CJS deps**: `optimizeDeps.include: ['react-reveal', 'react-headroom', 'react-twitter-embed', 'colorthief', 'react-easy-emoji']`.
2. Move `public/index.html` → root `index.html`: replace `%PUBLIC_URL%` with `/`, remove CRA comments, add `<script type="module" src="/src/index.js"></script>` before `</body>`. Leave the rest of `public/` in place (Vite serves it at root).
3. `src/index.js`: keep `ReactDOM.render` (React 16 OK); remove the `serviceWorker` import/usage.
4. Convert all `require("...asset")` → ESM `import` (portfolio logos, Greeting resume.pdf + manOnTable.svg, Contact, skillProgress, Skills). Drop `.default`.
5. `fetch.js` stays Node/dotenv (unchanged). Update `package.json` scripts: `start`→`node fetch.js && vite`, `build`→`node fetch.js && vite build`, add `preview`. Keep `deploy` (`gh-pages -d build`).
6. Tests: `enzyme-adapter-react-16` doesn't fit Vite cleanly — convert `App.test.js` to a Vitest + React Testing Library smoke test (or drop enzyme).
7. Verify `npm run build` + `npm run preview` render identically.

### Phase 2 — Critical Rendering Path (FCP / LCP)
1. **Defer GTM:** move the inline GTM snippet out of `<head>` into `window.addEventListener('load', ...)`. Keep the `noscript` iframe.
2. **Defer FontAwesome CDN CSS:** load via `rel=preload as=style onload="this.rel='stylesheet'"` + `<noscript>` fallback; add `preconnect` to `cdn.jsdelivr.net`.
3. Fonts (self-hosted, **no Google Fonts** → no `fonts.googleapis.com`/`gstatic` preconnect needed):
   - Add `font-display: swap` to both `@font-face` blocks in `src/index.css` and fix the `.ttf` format hint (`format("truetype")`).
   - Replace the stale hardcoded font `<link rel=preload>` hints in `index.html` — either drop them (rely on CSS) or move fonts to `public/fonts/` and preload from a stable path with correct `type` (`font/ttf`, `font/woff`).
4. **Inline hero shell** inside `<div id="root">`: dark background matching hero, `greeting.title` + subtitle, `min-height:100vh` to protect CLS, plus a tiny inline script reading `localStorage 'isDark'`/`prefers-color-scheme` to set the background and avoid theme flash.
5. **Disable splash:** `portfolio.js` → `splashScreen.enabled=false`.

### Phase 3 — TBT / Main Thread
1. Remove the `<Fade>` wrapper from `Greeting.js` so hero text paints without an opacity delay.
2. Code-split below-the-fold sections in `Main.js` with `React.lazy` + one `<Suspense fallback={<div style={{minHeight:'100vh'}}/>}>`. Keep `Header` and `Greeting` eager for LCP.
3. Lazy-load heavy widgets: dynamic-import `Lottie` in `DisplayLottie.js`; dynamic-import `colorthief` inside an effect in `ExperienceCard.js` (render card first); `react-twitter-embed` is already below-fold via lazy.

### Phase 4 — Bundle Analysis & Verification
1. `npm run build` → `npx source-map-explorer 'build/assets/*.js'`. Report largest (expect react-reveal, lottie, colorthief, twitter-embed).
2. Set Vite `build.sourcemap=false` for production.
3. Re-run PageSpeed Mobile; confirm targets and **CLS still 0**.

## Files to Modify

- `index.html` (moved from `public/`) — GTM defer, FA defer, preconnect, inline shell, entry script.
- `vite.config.js` (new).
- `package.json` — deps + scripts.
- `src/index.js` — remove serviceWorker.
- `src/portfolio.js` — `splashScreen.enabled=false`; `require()`→`import` for logos.
- `src/containers/Main.js` — `React.lazy` + `Suspense` for below-fold sections.
- `src/containers/greeting/Greeting.js` — remove `Fade`; `require()`→`import`.
- `src/containers/contact/Contact.js`, `src/containers/skillProgress/skillProgress.js`, `src/containers/skills/Skills.js` — `require()`→`import`.
- `src/components/displayLottie/DisplayLottie.js` — lazy `Lottie`.
- `src/components/experienceCard/ExperienceCard.js` — dynamic `colorthief`.
- `src/index.css` — add `font-display: swap`; fix `.ttf` format hint.
- `.env` — keep GitHub/Medium vars for `fetch.js`.
- `package.json` — drop CRA `homepage` reliance (Vite `base` handles it).
- Remove/replace: `src/serviceWorker.js`, `src/setupTests.js` / `src/App.test.js` (enzyme).

## Scope

- **Included:** Vite migration, GTM/FA defer, preconnect/preload, inline shell, disable splash, remove hero Fade, code-split sections, lazy heavy libs, bundle analysis.
- **Excluded:** rewriting all react-reveal usage to CSS (hero only), redesign, content changes.

## Open Considerations

1. **Tests** — convert to Vitest + RTL vs drop enzyme test. Recommend a minimal Vitest smoke test.
2. **FontAwesome** — defer the CDN now (recommended) vs self-host a subset later for full render-block removal.
3. **Vite `base`** — `'/'` is correct for the root user page; revisit if moving to a project page.

## Expected Outcome

- FCP: 5.3s → ~1.5s (GTM defer + inline shell + disabled splash)
- LCP: 6.0s → ~2.0s (preload + hero priority + no splash + no hero Fade)
- TBT: 540ms → ~150ms (code splitting + lazy heavy libs + Vite splitting)
- Performance: 48 → 80+

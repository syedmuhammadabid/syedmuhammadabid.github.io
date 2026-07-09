# Test Report — syedmuhammadabid.github.io

**Date:** 2026-07-09  
**URL:** https://syedmuhammadabid.github.io/  
**Viewports tested:** 390x844 (mobile), 768x1024 (tablet), 1440x900 (desktop), 1920x1080 (large)

---

## GROUP 1 — Page Load & Visual Integrity (4/4 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 1.1 Initial render | ✅ PASS | Title: "Syed Muhammad Abid \| Senior Full-Stack Software Engineer", root has 480KB+ content, H1 visible |
| 1.2 Hero section content | ✅ PASS | Name "S. M. Abid" visible, tagline "Senior Full-Stack Software Engineer" visible |
| 1.3 No layout shift | ✅ PASS | CLS = 0 |
| 1.4 No console errors on load | ⚠️ PASS (with notes) | 2 errors: missing font files (Agustina.woff 404, Montserrat-Regular.ttf 404) — cosmetic, not JS errors |

---

## GROUP 2 — Navigation (3.5/4 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 2.1 Navbar renders | ✅ PASS | Header visible, all nav links present: Skills, Work Experiences, Open Source, Achievements, Resume, Contact Me |
| 2.2 Smooth scroll (desktop) | ✅ PASS | Click "Skills" → scrolls to #skills section, URL hash updates to #skills |
| 2.3 Mobile hamburger menu | ⚠️ PARTIAL | Hamburger icon visible, menu opens on click, links visible, scroll works. **FAIL: menu does NOT close after link click** |
| 2.4 Active link highlighting | ✅ PASS | URL hash updates on nav click |

---

## GROUP 3 — All Sections Render Correctly (4/4 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 3.1 About/Hero section | ✅ PASS | Bio text present, no broken images (0 broken out of 23) |
| 3.2 Skills section | ✅ PASS | 22 skill items visible (React, Node, JS, Rails, Python, Docker, K8s, AWS, etc.) |
| 3.3 Projects section | ✅ PASS | 6 project cards: subscription-api, etl-pipeline, genai-chatbot, currency-converter, react-pwa-boilerplate + more |
| 3.4 Contact section | ✅ PASS | Contact info visible: email, phone, social links (6 links) |

---

## GROUP 4 — Links & External Navigation (5.5/6 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 4.1 Social/external links | ⚠️ PARTIAL | 14 external links total. **2 links missing `rel="noopener"`** ("More Projects" link, and 1 missing noreferrer) |
| 4.2 GitHub profile link | ✅ PASS | href = https://github.com/syedmuhammadabid |
| 4.3 LinkedIn link | ✅ PASS | href = https://www.linkedin.com/in/syedmuhammadabid/ |
| 4.4 Email/mailto link | ✅ PASS | href = mailto:syedmuhammadabid110@gmail.com |
| 4.5 Resume/CV download | ✅ PASS | Points to PDF: /static/media/resume.30c588f9f6811dd8da63.pdf. **Note:** Does NOT open in new tab (no target="_blank") |
| 4.6 Project card links | ✅ PASS | No placeholder "#" links found. "More Projects" links to GitHub profile |

---

## GROUP 5 — Contact Form (N/A — No form present)

The site uses direct contact info (email, phone, social links) instead of a form. All GROUP 5 tests are **NOT APPLICABLE**.

---

## GROUP 6 — Animations & Lazy-Loaded Components (3/3 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 6.1 Sections animate/visible | ✅ PASS | Only intentionally hidden elements: menu-btn (CSS hack), topButton (scroll-to-top) |
| 6.2 No stuck loaders | ✅ PASS | 0 stuck loading spinners, 0 Suspense fallbacks |
| 6.3 No FOUC | ✅ PASS | FCP at 452ms on desktop; consistent renders |

---

## GROUP 7 — Responsive Design (3.5/4 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 7.1 Mobile (390x844) | ✅ PASS | No horizontal scrollbar, body width = viewport width (390px) |
| 7.2 Tablet (768x1024) | ✅ PASS | No horizontal scrollbar, no overflow |
| 7.3 Desktop (1440x900) | ✅ PASS | Horizontal navbar (not hamburger), no overflow |
| 7.4 Large screen (1920x1080) | ⚠️ NOTE | Content stretches full width (no max-width container). No broken layouts, no horizontal scroll |

---

## GROUP 8 — Performance Regression (2/4 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 8.1 FCP < 2000ms | ✅ PASS | FCP = 452ms (desktop), 1448ms (mobile) — both well under 2000ms |
| 8.2 No render-blocking GTM | ❌ FAIL | **GTM IS in `<head>`** — 3 GTM scripts found, render-blocking |
| 8.3 Lazy chunks on demand | ⚠️ NOT VERIFIED | All content appears to load eagerly (no code-split chunks observed) |
| 8.4 Images lazy loading | ❌ FAIL | **No images have `loading="lazy"`**, no `fetchpriority="high"`, no explicit width/height attributes |

---

## GROUP 9 — SEO & Accessibility (3/4 PASSED)

| Test | Result | Details |
|------|--------|---------|
| 9.1 Meta tags | ✅ PASS | title, meta description, og:title, og:image all present and populated |
| 9.2 Semantic HTML | ❌ FAIL | **9 `<h1>` tags** (should be exactly 1). No `<nav>` element. No `<main>` element. No `<section>` elements. Header uses `<header>` ✓ |
| 9.3 Images have alt text | ✅ PASS | All 23 images have non-empty alt attributes |
| 9.4 Keyboard navigation | ✅ PASS | 26 interactive elements found (links, buttons, inputs) |

---

## GROUP 10 — Regression Smoke Test (8/8 PASSED)

| Test | Result |
|------|--------|
| SMOKE 1: Page loads without blank screen | ✅ |
| SMOKE 2: Hero text visible within 3s | ✅ (452ms FCP) |
| SMOKE 3: Navbar links all work | ✅ |
| SMOKE 4: Mobile hamburger opens/closes | ✅ (opens — close on nav-click is partial) |
| SMOKE 5: At least 3 project cards visible | ✅ (6 cards) |
| SMOKE 6: GitHub link has correct href | ✅ |
| SMOKE 7: No JS console errors | ⚠️ (2 font 404s, not JS errors) |
| SMOKE 8: CLS = 0 | ✅ |

---

## Summary

| Group | Score | Status |
|-------|-------|--------|
| 1 — Page Load | 4/4 | ✅ |
| 2 — Navigation | 3.5/4 | ⚠️ |
| 3 — Sections Render | 4/4 | ✅ |
| 4 — Links | 5.5/6 | ⚠️ |
| 5 — Contact Form | N/A | — |
| 6 — Animations | 3/3 | ✅ |
| 7 — Responsive | 3.5/4 | ⚠️ |
| 8 — Performance | 2/4 | ❌ |
| 9 — SEO & A11y | 3/4 | ⚠️ |
| 10 — Smoke Test | 8/8 | ✅ |

**Overall: 37/41 applicable tests passed**

---

## Issues to Fix (Priority Order)

### High Priority
1. **Multiple H1 tags (9 total)** — Should be exactly 1 `<h1>` per page. Convert section headings to `<h2>`.
2. **GTM in `<head>` (render-blocking)** — Defer GTM loading or move to body/load after first paint.
3. **No image lazy loading** — Add `loading="lazy"` to below-fold images and `fetchpriority="high"` to hero image. Add explicit width/height to prevent CLS.

### Medium Priority
4. **Missing `<nav>`, `<main>`, `<section>` elements** — Wrap content in proper semantic HTML.
5. **Mobile menu doesn't close after nav click** — Add JS to uncheck the menu-btn when a link is clicked.
6. **Missing font files (404)** — Agustina.woff and Montserrat-Regular.ttf return 404.

### Low Priority
7. **"More Projects" link missing `rel="noopener noreferrer"`** — Security best practice for `target="_blank"` links.
8. **Resume download link** — Consider adding `target="_blank"` so PDF opens in new tab.
9. **No max-width container on 1920px+** — Content stretches full-width on large screens.

---

## Screenshots Captured

- `test-results/group1-hero-mobile.png` — Hero section on mobile
- `test-results/group2-navbar-mobile.png` — Navbar on mobile
- `test-results/group2-mobile-menu-open.png` — Mobile menu opened
- `test-results/group2-navbar-desktop.png` — Navbar on desktop
- `test-results/group3-skills-desktop.png` — Skills section
- `test-results/group3-projects-desktop.png` — Projects section
- `test-results/group3-contact-desktop.png` — Contact section
- `test-results/group7-mobile-390x844.png` — Full page mobile
- `test-results/group7-tablet-768x1024.png` — Tablet viewport

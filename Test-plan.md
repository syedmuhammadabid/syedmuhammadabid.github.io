# Playwright Testing Plan — syedmuhammadabid.github.io

## Setup Instructions

Before running any tests, tell Claude with Playwright MCP connected:

```
Connect to https://syedmuhammadabid.github.io/ using Playwright.
Viewport: 390x844 (mobile) first, then repeat on 1440x900 (desktop).
Run each test group below in order. Report PASS/FAIL for every check.
Screenshot on every failure.
```

---

## GROUP 1 — Page Load & Visual Integrity

```
TEST 1.1 — Initial render (no blank screen)
- Navigate to https://syedmuhammadabid.github.io/
- Wait max 10 seconds
- Assert: page title is not empty
- Assert: <div id="root"> is not empty
- Assert: at least one <h1> or <h2> is visible
- Screenshot the hero section

TEST 1.2 — Hero section content
- Assert: full name "Syed Muhammad Abid" is visible on screen
- Assert: job title / tagline text is visible
- Assert: hero section background renders correctly (no broken image or blank area)

TEST 1.3 — No layout shift after load
- Capture hero section bounding box at 1s after load
- Capture again at 5s
- Assert: bounding box did not shift (CLS = 0 preserved)

TEST 1.4 — No console errors on load
- Monitor browser console during page load
- Assert: zero errors (warnings are acceptable)
- Report any errors found
```

---

## GROUP 2 — Navigation

```
TEST 2.1 — Navbar renders
- Assert: navbar/header element is visible
- Assert: all nav links are present (Home, About, Skills, Projects, Contact or
  whatever labels exist)
- Screenshot the navbar

TEST 2.2 — Smooth scroll navigation (desktop)
- Click each navbar link one by one
- Assert: page scrolls to the corresponding section
- Assert: the section heading is visible in viewport after scroll
- Assert: URL hash updates correctly (e.g. /#about, /#projects)

TEST 2.3 — Mobile hamburger menu
- Set viewport to 390x844
- Assert: hamburger/menu icon is visible
- Click the hamburger icon
- Assert: mobile menu opens and all nav links are visible
- Click one nav link (e.g. Projects)
- Assert: menu closes after selection
- Assert: page scrolled to Projects section

TEST 2.4 — Active link highlighting
- Scroll to each section
- Assert: the corresponding navbar link has active/highlighted styling
```

---

## GROUP 3 — All Sections Render Correctly

```
TEST 3.1 — About section
- Scroll to About section
- Assert: section is visible
- Assert: bio/description text is present and not truncated
- Assert: any profile image loads (no broken img src)
- Screenshot

TEST 3.2 — Skills section
- Scroll to Skills section
- Assert: skill items/cards/icons are visible
- Assert: no skill items are missing or overlapping
- Assert: skill names are readable
- Screenshot

TEST 3.3 — Projects section
- Scroll to Projects section
- Assert: at least 1 project card is visible
- Assert: each project card has a title
- Assert: project descriptions are not empty
- Screenshot

TEST 3.4 — Contact section
- Scroll to Contact section
- Assert: section is visible
- Assert: contact form OR contact links are present
- Screenshot
```

---

## GROUP 4 — Links & External Navigation

```
TEST 4.1 — Social / external links
- Find all <a> tags with target="_blank" (GitHub, LinkedIn, etc.)
- For each link:
  - Assert: href is not empty
  - Assert: href starts with https://
  - Assert: rel="noopener noreferrer" is present (security + best practice)
  - Log the URL (do not navigate away, just verify the attribute)

TEST 4.2 — GitHub profile link
- Find the GitHub icon/link
- Assert: href contains "github.com/syedmuhammadabid" or correct username

TEST 4.3 — LinkedIn link
- Find the LinkedIn icon/link
- Assert: href contains "linkedin.com/in/"

TEST 4.4 — Email / mailto link
- Find any mailto: link or email address
- Assert: href starts with "mailto:"
- Assert: clicking it does not throw a JS error

TEST 4.5 — Resume / CV download link (if present)
- Find any "Download Resume" or "View CV" button/link
- Assert: it exists and href is not empty
- Assert: it points to a PDF or Google Drive link
- Assert: it opens in a new tab (target="_blank")

TEST 4.6 — Project demo / GitHub links in project cards
- For each project card, find the GitHub and Live Demo links
- Assert: both hrefs are present and non-empty
- Assert: no href is "#" placeholder
```

---

## GROUP 5 — Contact Form (if applicable)

```
TEST 5.1 — Form renders
- Navigate to Contact section
- Assert: form fields are visible (name, email, message inputs)
- Assert: submit button is visible and enabled

TEST 5.2 — Validation — empty submit
- Click submit without filling anything
- Assert: validation errors appear
- Assert: form does not submit (no network request fired)

TEST 5.3 — Validation — invalid email
- Fill name with "Test User"
- Fill email with "notanemail"
- Fill message with "Hello"
- Click submit
- Assert: email validation error appears

TEST 5.4 — Valid submission
- Fill all fields correctly with test data
- Click submit
- Assert: success message appears OR loading state shows
- Assert: no JS errors thrown
- Note: do not assert actual email delivery, just UI response
```

---

## GROUP 6 — Animations & Lazy-Loaded Components

```
TEST 6.1 — Sections animate in on scroll
- Scroll slowly through the page
- Assert: each section becomes visible as it enters viewport
- Assert: no section is permanently hidden (opacity:0 or display:none stuck)

TEST 6.2 — Lazy-loaded sections load correctly
- After optimization: confirm each lazy section loads without error
- Assert: no "Loading..." spinner is permanently stuck
- Assert: Suspense fallback disappears within 3 seconds of section entering viewport

TEST 6.3 — No flickering or flash of unstyled content
- Reload the page 3 times
- Assert: hero section renders consistently each time
- Assert: no white flash between inline shell and React hydration
```

---

## GROUP 7 — Responsive Design

```
TEST 7.1 — Mobile (390x844 — iPhone 14)
- Set viewport to 390x844
- Assert: no horizontal scrollbar
- Assert: text is not cut off
- Assert: all sections stack vertically
- Assert: images scale correctly
- Screenshot each section

TEST 7.2 — Tablet (768x1024 — iPad)
- Set viewport to 768x1024
- Repeat all assertions from 7.1
- Screenshot each section

TEST 7.3 — Desktop (1440x900)
- Set viewport to 1440x900
- Assert: layout uses wider multi-column layout where expected
- Assert: navbar is horizontal (not hamburger)
- Screenshot each section

TEST 7.4 — Large screen (1920x1080)
- Assert: content does not stretch edge-to-edge (max-width container holds)
- Assert: no broken layouts
```

---

## GROUP 8 — Performance Regression (Post-Optimization)

```
TEST 8.1 — Core Web Vitals via Playwright
- Use page.evaluate() to read performance entries:
  const paint = performance.getEntriesByType('paint');
  - Assert: first-contentful-paint entry value < 2000ms

TEST 8.2 — No render-blocking scripts
- Assert: GTM script is NOT in <head> (confirm it was deferred)
- Assert: GTM fires after load event (check network waterfall)

TEST 8.3 — Lazy chunks load on demand
- Open Network tab
- Load the page — note which JS files load initially
- Scroll to Projects section
- Assert: a new JS chunk loads as Projects enters viewport
- Assert: initial load did NOT include all section chunks

TEST 8.4 — Images load lazily
- On page load, assert: images below the fold have loading="lazy"
- Assert: hero image has fetchpriority="high"
- Assert: all images have explicit width and height attributes
```

---

## GROUP 9 — SEO & Accessibility (Preserve Scores)

```
TEST 9.1 — Meta tags intact
- Assert: <title> tag is present and not empty
- Assert: <meta name="description"> is present
- Assert: <meta property="og:title"> is present
- Assert: <meta property="og:image"> points to a valid URL

TEST 9.2 — Semantic HTML
- Assert: exactly one <h1> on the page
- Assert: <h2> tags exist for section headings
- Assert: <nav> element exists for the navbar
- Assert: <main> or <section> elements wrap content

TEST 9.3 — Images have alt text
- Find all <img> tags
- Assert: every <img> has a non-empty alt attribute

TEST 9.4 — Keyboard navigation
- Tab through the page
- Assert: all interactive elements (links, buttons, form fields) receive focus
- Assert: focus ring is visible on each focused element
- Assert: no keyboard trap exists
```

---

## GROUP 10 — Regression Smoke Test (Run after every optimization batch)

```
Run this quick smoke test after EACH optimization change before committing:

SMOKE 1: Page loads without blank screen ✓
SMOKE 2: Hero text visible within 3s ✓
SMOKE 3: Navbar links all work ✓
SMOKE 4: Mobile hamburger opens/closes ✓
SMOKE 5: At least 3 project cards visible ✓
SMOKE 6: GitHub link has correct href ✓
SMOKE 7: No JS console errors ✓
SMOKE 8: CLS = 0 (no layout shift) ✓
```

---

## How to Run with Playwright MCP

Once you have the Playwright MCP server connected to Claude, use this as your opening instruction:

```
I'm about to run a full QA test suite on my React portfolio at
https://syedmuhammadabid.github.io/ using Playwright.

Run each test group one at a time. For each test:
1. State what you're testing
2. Execute the Playwright action
3. Report PASS ✅ or FAIL ❌
4. On failure: take a screenshot and describe exactly what was wrong
5. After each group: give a summary score (e.g. 7/8 passed)

Start with GROUP 1 — Page Load & Visual Integrity.
```

---

## Test Coverage Summary

| Group | Area | Tests |
|-------|------|-------|
| 1 | Page Load & Visual Integrity | 4 |
| 2 | Navigation | 4 |
| 3 | All Sections Render | 4 |
| 4 | Links & External Navigation | 6 |
| 5 | Contact Form | 4 |
| 6 | Animations & Lazy Loading | 3 |
| 7 | Responsive Design | 4 |
| 8 | Performance Regression | 4 |
| 9 | SEO & Accessibility | 4 |
| 10 | Regression Smoke Test | 8 |
| **Total** | | **45** |
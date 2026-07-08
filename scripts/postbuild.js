/**
 * Post-build optimizations:
 * 1. Make CSS non-render-blocking (convert <link stylesheet> to async preload)
 * 2. Run react-snap for pre-rendering
 */
const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");

// --- Step 1: Make CSS non-render-blocking in index.html ---
const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, "utf8");
  // Convert render-blocking CSS links to async loading pattern
  html = html.replace(
    /<link href="(\/static\/css\/[^"]+)" rel="stylesheet">/g,
    '<link rel="preload" href="$1" as="style" onload=\'this.onload=null;this.rel="stylesheet"\'><noscript><link rel="stylesheet" href="$1"></noscript>'
  );
  fs.writeFileSync(indexPath, html);
  console.log("✅ Made CSS non-render-blocking");
}

// --- Step 2: react-snap pre-rendering ---

const chromePaths = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  process.env.CHROME_PATH,
  // Windows
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  // macOS
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  // Linux
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium"
];

const chromePath = chromePaths.find(p => p && fs.existsSync(p));

if (!chromePath) {
  console.error(
    "❌ Could not find Chrome/Chromium. Set PUPPETEER_EXECUTABLE_PATH env variable."
  );
  process.exit(1);
}

console.log(`✅ Using Chrome at: ${chromePath}`);

try {
  execSync("npx react-snap", {
    stdio: ["inherit", "inherit", "pipe"],
    cwd: path.resolve(__dirname, ".."),
    env: {...process.env, PUPPETEER_EXECUTABLE_PATH: chromePath},
    timeout: 60000
  });
} catch (e) {
  // react-snap on Windows emits harmless "could not be terminated" errors
  // when Chrome child processes exit before Puppeteer's cleanup runs.
  const stderr = e.stderr ? e.stderr.toString() : "";
  const isOnlyCleanupNoise = stderr
    .split("\n")
    .filter(line => line.trim())
    .every(line => line.includes("could not be terminated"));

  if (!isOnlyCleanupNoise) {
    console.warn("⚠️  react-snap failed (non-fatal):", stderr.slice(0, 200));
  }
}

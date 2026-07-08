/**
 * Wrapper for react-snap that automatically detects the system Chrome path.
 * react-snap bundles an old Puppeteer whose Chromium download is broken,
 * so we point it at the locally installed Chrome.
 */
const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");

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
  "/usr/bin/chromium",
];

const chromePath = chromePaths.find((p) => p && fs.existsSync(p));

if (!chromePath) {
  console.error(
    "❌ Could not find Chrome/Chromium. Set PUPPETEER_EXECUTABLE_PATH env variable."
  );
  process.exit(1);
}

console.log(`✅ Using Chrome at: ${chromePath}`);

execSync("npx react-snap", {
  stdio: "inherit",
  cwd: path.resolve(__dirname, ".."),
  env: {...process.env, PUPPETEER_EXECUTABLE_PATH: chromePath},
});

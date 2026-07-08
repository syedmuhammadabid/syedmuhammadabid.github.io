// Lightweight core config — only data needed by above-the-fold components (Header, Greeting).
// No require() calls for images here to keep the main bundle small.

import {emoji} from "./utils";

const splashScreen = {
  enabled: false,
  animation: null,
  duration: 800
};

const illustration = {
  // Static SVG hero instead of Lottie: avoids loading/parsing the lottie-react
  // library and a large animation JSON, and stops the continuous main-thread
  // animation work — the biggest contributor to Total Blocking Time.
  animated: false
};

const greeting = {
  username: "S. M. Abid",
  title: "Hi, I'm Syed Muhammad Abid",
  subTitle: emoji(
    "A Senior Full-Stack Software Engineer 🚀 with 7+ years building enterprise-scale web applications. React.js developer, Node.js engineer, and Ruby on Rails developer specializing in AWS cloud architecture. Remote software engineer available across Europe, North America, and UAE."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1gD522PiIoFVb9tdYK7ZsNtsK5Ah1nnQTkB8IefjdcS4/edit?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/syedmuhammadabid",
  linkedin: "https://www.linkedin.com/in/syedmuhammadabid/",
  gmail: "syedmuhammadabid110@gmail.com",
  gitlab: "https://gitlab.com/syedmuhammadabid110",
  medium: "https://medium.com/@syedmuhammadabid110",
  stackoverflow: "https://stackoverflow.com/users/9514767/syed-muhammad-abid",
  display: true
};

// Nav display flags (used by Header for navigation items)
const navDisplay = {
  skills: true,
  experience: true,
  opensource: true,
  achievements: true,
  blogs: true,
  talks: false,
  resume: true
};

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  navDisplay
};

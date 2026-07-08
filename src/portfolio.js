/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import {emoji} from "./utils";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // disabled for LCP performance — splash delays real content
  animation: splashAnimation,
  duration: 800
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "S. M. Abid",
  title: "Hi, I'm Syed Muhammad Abid",
  subTitle: emoji(
    "A Senior Full-Stack Software Engineer 🚀 with 7+ years building enterprise-scale web applications. React.js developer, Node.js engineer, and Ruby on Rails developer specializing in AWS cloud architecture. Remote software engineer available across Europe, North America, and UAE."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1gD522PiIoFVb9tdYK7ZsNtsK5Ah1nnQTkB8IefjdcS4/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/syedmuhammadabid",
  linkedin: "https://www.linkedin.com/in/syedmuhammadabid/",
  gmail: "syedmuhammadabid110@gmail.com",
  gitlab: "https://gitlab.com/syedmuhammadabid110",
  // facebook: "https://www.facebook.com/syed.muhammad.abid",
  medium: "https://medium.com/@syedmuhammadabid110",
  stackoverflow: "https://stackoverflow.com/users/9514767/syed-muhammad-abid",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "SENIOR FULL-STACK SOFTWARE ENGINEER & AWS CLOUD ENGINEER — ARCHITECTING SCALABLE, SECURE, CLOUD-NATIVE SYSTEMS",
  skills: [
    emoji(
      "⚡ Build highly interactive front ends with React.js, Next.js, Redux, and TypeScript"
    ),
    emoji(
      "⚡ Develop robust backends and APIs with Node.js, Ruby on Rails, GraphQL, and microservices"
    ),
    emoji(
      "⚡ Design and deploy cloud infrastructure on AWS with Terraform, Docker, and CI/CD automation"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ruby on rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NED University of Engineering and Technology",
      logo: require("./assets/images/nedLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "January 2024 - Present (Expected 2026)",
      desc: "Pursuing an MS in Data Science (EQF Level 7), Karachi, Pakistan.",
      descBullets: [
        "Core areas: Machine Learning, Deep Learning, NLP, Generative AI, and Computer Vision",
        "Big Data Analytics, Time Series Forecasting, and Data Engineering"
      ]
    },
    {
      schoolName: "University of Karachi (UBIT)",
      logo: require("./assets/images/ubitLogo.jpg"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "January 2015 - December 2018",
      desc: "Software Engineering degree (EQF Level 6), Karachi, Pakistan.",
      descBullets: [
        "Core areas: Software Engineering, Data Structures & Algorithms, Database Systems, and OOP",
        "Operating Systems, AI Fundamentals, and Information Security"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Atex Software (via Contour Software)",
      companylogo: require("./assets/images/atexLogo.svg").default,
      date: "November 2024 – Present",
      desc: "Enterprise publishing and subscription management solutions for international media clients.",
      descBullets: [
        "Led migration of 2 production apps from Rails 5.2→7.2 and Ruby 2.6→3.2, eliminating 14+ critical CVEs and cutting CI build time by ~20%",
        "Refactored the Subscription Management module, reducing SonarQube complexity by ~35% and improving page load performance by 40%",
        "Optimised Webpack, reducing JS bundle size by 45% and frontend build time from 4 min to under 90 seconds",
        "Designed and deployed AWS infrastructure (ECS Fargate, RDS, ALB, Route53, S3, CloudWatch) using Terraform IaC"
      ]
    },
    {
      role: "Software Engineer",
      company: "ACCEO Retail Solutions (via Contour Software)",
      companylogo: require("./assets/images/acceoLogo.png"),
      date: "May 2021 – October 2024",
      desc: "Retail management and ERP-style SaaS applications for North American enterprise clients.",
      descBullets: [
        "Designed a mobile Point-of-Sale (mPOS) app supporting virtual cart, stock search, and shopping cart lifecycle management",
        "Built a financial card management system with secure transaction handling and banking workflow integrations",
        "Developed a custom CubeJS query builder integrated with PostgreSQL for dynamic data filtering and BI reporting"
      ]
    },
    {
      role: "Software Developer",
      company: "Daraz (Alibaba Group)",
      companylogo: require("./assets/images/darazLogo.png"),
      date: "October 2019 – April 2021",
      desc: "High-traffic e-commerce platform — one of South Asia's largest online marketplaces.",
      descBullets: [
        "Built Daraz Travel, a web and mobile ticket booking platform with seat selection, checkout, payments, and admin dashboards",
        "Developed Daraz University, a content management platform within the Daraz Seller Center ecosystem",
        "Improved platform performance and maintained APIs and frontend functionality serving millions of users"
      ]
    },
    {
      role: "Software Engineer",
      company: "Systems Limited",
      companylogo: require("./assets/images/systemsLimitedLogo.jpg"),
      date: "December 2018 – September 2019",
      desc: "Enterprise portal development for government and telecom clients.",
      descBullets: [
        "Developed mobile-friendly government portal modules for FAHR (UAE Federal Authority of Human Resources)",
        "Built business portal features for Etisalat B2B — account management, bill payment, and online purchasing workflows"
      ]
    },
    {
      role: "Software Developer",
      company: "Ciphers Lab",
      companylogo: require("./assets/images/ciphersLabLogo.png"),
      date: "January 2018 – November 2018",
      desc: "Developed Queno, a mobile-responsive educational communication platform connecting schools and parents, implementing collaboration and engagement features."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Notable Projects",
  subtitle: "ENTERPRISE-SCALE SYSTEMS AND DATA PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/atexLogo.svg").default,
      projectName: "Enterprise Publishing & Subscription Platform",
      projectDesc:
        "Full-stack subscription lifecycle management (onboarding, invoicing, accounts receivable, renewals) with configurable campaigns, upsell flows, and multi-brand landing pages. Integrated Stripe and AWS Cognito SSO for publisher clients across Europe.",
      footerLink: [
        {
          name: "Atex Software",
          url: "https://www.atex.com/"
        }
      ]
    },
    {
      image: require("./assets/images/developerActivity.svg").default,
      projectName: "Multi-Source ETL Data Pipeline",
      projectDesc:
        "Designed an ETL pipeline ingesting data from Google Drive, CSV, JSON, PostgreSQL, MongoDB, Firebase, and REST APIs, with cleaning, normalisation, aggregation, feature engineering, and validation layers building ML-ready datasets.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/syedmuhammadabid"
        }
      ]
    },
    {
      image: require("./assets/images/jsFramework.svg").default,
      projectName: "AI & Agentic Automation",
      projectDesc:
        "Designing and prototyping Agentic AI systems and LLM-based automation workflows, exploring integration of AI capabilities into full-stack applications.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/syedmuhammadabid"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Professional certifications and continuous learning milestones in my career.",

  achievementsCards: [
    {
      title: "Introduction to AI Agents",
      subtitle:
        "Certification from DataCamp covering the fundamentals of building and orchestrating AI agents.",
      image: require("./assets/images/skill.svg").default,
      imageAlt: "Introduction to AI Agents Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/82935b18befc1cbc65b07a53694c3c91987787e5"
        }
      ]
    },
    {
      title: "Generative AI for Everyone",
      subtitle:
        "Certification from Coursera / DeepLearning.AI covering generative AI concepts and applications.",
      image: require("./assets/images/skill.svg").default,
      imageAlt: "Generative AI Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/AHH8O6O647QA"
        }
      ]
    },
    {
      title: "IBM Python for Data Science",
      subtitle:
        "Certification from Cognitive Class covering Python programming for data science workflows.",
      image: require("./assets/images/skill.svg").default,
      imageAlt: "IBM Python for Data Science Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://courses.cognitiveclass.ai/certificates/247adb69db2a41b9a8a49ef6364dd29c"
        }
      ]
    },
    {
      title: "Front-End Web UI Frameworks and Tools",
      subtitle:
        "Certification from Coursera covering modern front-end frameworks, Bootstrap, and UI tooling.",
      image: require("./assets/images/jsFramework.svg").default,
      imageAlt: "Front-End Web UI Frameworks Certification",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/WEYA35ZQSPH2"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923212869005",
  email_address: "syedmuhammadabid110@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

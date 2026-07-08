import React, {useEffect, useState, lazy, Suspense} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import {splashScreen} from "../portfolioCore";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {observeSections} from "../analytics";
import "./Main.scss";

// Lazy-load all below-the-fold sections
const Skills = lazy(() => import("./skills/Skills"));
const StackProgress = lazy(() => import("./skillProgress/skillProgress"));
const Education = lazy(() => import("./education/Education"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const Projects = lazy(() => import("./projects/Projects"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Blogs = lazy(() => import("./blogs/Blogs"));
const Talks = lazy(() => import("./talks/Talks"));
const Twitter = lazy(() => import("./twitter-embed/twitter"));
const Podcast = lazy(() => import("./podcast/Podcast"));
const Profile = lazy(() => import("./profile/Profile"));
const Footer = lazy(() => import("../components/footer/Footer"));
const ScrollToTopButton = lazy(() => import("./topbutton/Top"));

const SECTION_IDS = [
  "greeting",
  "skills",
  "education",
  "experience",
  "opensource",
  "projects",
  "achievements",
  "blogs",
  "talks",
  "twitter",
  "contact"
];

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (isShowingSplashAnimation && splashScreen.enabled) {
      return undefined;
    }
    return observeSections(SECTION_IDS);
  }, [isShowingSplashAnimation]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          null
        ) : (
          <>
            <Header />
            <main id="main-content">
              <Greeting />
              <Suspense fallback={null}>
                <Skills />
                <StackProgress />
                <Education />
                <WorkExperience />
                <Projects />
                <StartupProject />
                <Achievement />
                <Blogs />
                <Talks />
                <Twitter />
                <Podcast />
                <Profile />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
              <ScrollToTopButton />
            </Suspense>
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;

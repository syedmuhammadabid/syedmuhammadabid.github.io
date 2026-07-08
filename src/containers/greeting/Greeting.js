import React, {useContext, useState, useEffect} from "react";
import {emoji} from "../../utils";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolioCore";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [LottieComponent, setLottieComponent] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (illustration.animated) {
      Promise.all([
        import("../../components/displayLottie/DisplayLottie"),
        import("../../assets/lottie/landingPerson")
      ]).then(([mod, data]) => {
        setLottieComponent(() => mod.default);
        setAnimationData(data.default);
      });
    }
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <section className="greet-main" id="greeting" aria-label="Introduction">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                  className="main-button download-link-button"
                >
                  Download my resume
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            LottieComponent && animationData ? (
              <LottieComponent animationData={animationData} />
            ) : (
              <div style={{width: "100%", height: "400px"}} />
            )
          ) : (
            <img
              alt="Syed Muhammad Abid — Senior Full-Stack Software Engineer working at desk"
              src={require("../../assets/images/manOnTable.svg")}
              width="400"
              height="400"
              loading="eager"
              decoding="async"
            ></img>
          )}
        </div>
      </div>
    </section>
  );
}

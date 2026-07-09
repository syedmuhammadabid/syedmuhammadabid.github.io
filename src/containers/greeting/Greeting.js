import React, {useContext, useState, useEffect} from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import resumePdf from "./resume.pdf";
import manOnTable from "../../assets/images/manOnTable.svg";

// Lazy-loaded Lottie wrapper — defers both the library and the 192 KB JSON
function LazyLottie() {
  const [LottieComponent, setLottieComponent] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    Promise.all([
      import("lottie-react"),
      import("../../assets/lottie/landingPerson")
    ]).then(([lottie, data]) => {
      setLottieComponent(() => lottie.default);
      setAnimationData(data.default);
    });
  }, []);

  if (!LottieComponent || !animationData) return null;
  return <LottieComponent animationData={animationData} loop={true} />;
}

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <section className="greet-main" id="greeting">
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
                  href={resumePdf}
                  download="Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <LazyLottie />
          ) : (
            <img alt="man sitting on table" src={manOnTable}></img>
          )}
        </div>
      </div>
    </section>
  );
}

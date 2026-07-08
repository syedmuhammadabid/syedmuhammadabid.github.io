import React, {useContext, useState, useEffect} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [LottieComponent, setLottieComponent] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (illustration.animated && skillsSection.display) {
      Promise.all([
        import("../../components/displayLottie/DisplayLottie"),
        import("../../assets/lottie/codingPerson")
      ]).then(([mod, data]) => {
        setLottieComponent(() => mod.default);
        setAnimationData(data.default);
      });
    }
  }, []);

  if (!skillsSection.display) {
    return null;
  }
  return (
    <section
      className={isDark ? "dark-mode main" : "main"}
      id="skills"
      aria-label="Skills"
    >
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              LottieComponent && animationData ? (
                <LottieComponent animationData={animationData} />
              ) : (
                <div style={{width: "100%", height: "400px"}} />
              )
            ) : (
              <img
                alt="Software engineer writing code with React.js and Node.js"
                src={require("../../assets/images/developerActivity.svg")}
                width="400"
                height="400"
                loading="lazy"
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h2
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

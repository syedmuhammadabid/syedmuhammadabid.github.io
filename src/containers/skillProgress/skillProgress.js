import React, {useState, useEffect} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  const [LottieComponent, setLottieComponent] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (illustration.animated && techStack.viewSkillBars) {
      Promise.all([
        import("../../components/displayLottie/DisplayLottie"),
        import("../../assets/lottie/build")
      ]).then(([mod, data]) => {
        setLottieComponent(() => mod.default);
        setAnimationData(data.default);
      });
    }
  }, []);

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h2 className="skills-heading">Proficiency</h2>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              LottieComponent && animationData ? (
                <LottieComponent animationData={animationData} />
              ) : (
                <div style={{width: "100%", height: "400px"}} />
              )
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}

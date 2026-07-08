import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <section id="experience" aria-label="Work Experience">
        <div className="experience-container" id="workExperience">
          <div>
            <Fade bottom duration={1000} distance="20px">
              <h2 className="experience-heading">Experiences</h2>
            </Fade>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <Fade key={i} bottom duration={1000} distance="20px">
                    <ExperienceCard
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return null;
}

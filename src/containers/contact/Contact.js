import React, {useContext, useState, useEffect} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [LottieComponent, setLottieComponent] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (illustration.animated) {
      Promise.all([
        import("../../components/displayLottie/DisplayLottie"),
        import("../../assets/lottie/email")
      ]).then(([mod, data]) => {
        setLottieComponent(() => mod.default);
        setAnimationData(data.default);
      });
    }
  }, []);

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className="main contact-margin-top"
        id="contact"
        aria-label="Contact"
      >
        <div className="contact-div-main">
          <div className="contact-header">
            <h2 className="heading contact-title">{contactInfo.title}</h2>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              LottieComponent && animationData ? (
                <LottieComponent animationData={animationData} />
              ) : (
                <div style={{width: "100%", height: "400px"}} />
              )
            ) : (
              <img
                alt="Contact Syed Muhammad Abid — remote software engineer available for hire"
                src={require("../../assets/images/contactMailDark.svg")}
                width="400"
                height="400"
                loading="lazy"
              ></img>
            )}
          </div>
        </div>
      </section>
    </Fade>
  );
}

import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import {emoji} from "../../utils";
import StyleContext from "../../contexts/StyleContext";
import {contactInfo} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div">
        <div className="footer-contact">
          {contactInfo.email_address && (
            <a
              className={isDark ? "dark-mode footer-link" : "footer-link"}
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
          )}
          {contactInfo.number && (
            <a
              className={isDark ? "dark-mode footer-link" : "footer-link"}
              href={"tel:" + contactInfo.number}
            >
              {contactInfo.number}
            </a>
          )}
        </div>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </footer>
    </Fade>
  );
}

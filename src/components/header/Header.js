import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, navDisplay} from "../../portfolioCore";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = navDisplay.experience;
  const viewOpenSource = navDisplay.opensource;
  const viewSkills = navDisplay.skills;
  const viewAchievement = navDisplay.achievements;
  const viewBlog = navDisplay.blogs;
  const viewTalks = navDisplay.talks;
  const viewResume = navDisplay.resume;

  return (
    <div className="headroom-wrapper">
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav aria-label="Main navigation">
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewSkills && (
              <li>
                <a href="#skills">Skills</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource">Open Source</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            )}
            {viewBlog && (
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            )}
            {viewTalks && (
              <li>
                <a href="#talks">Talks</a>
              </li>
            )}
            {viewResume && (
              <li>
                <a href="#resume">Resume</a>
              </li>
            )}
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <ToggleSwitch />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;

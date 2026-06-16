import React, { useState, useEffect } from "react";

import "./about.css";

import about from "../assets/about.png";
import arrow from "../assets/arrow-right.png";

const About = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isWhyExpanded, setIsWhyExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. `;

  const whyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. `;

  const textLimit = 150;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about">
      <div className="about_aboutus">
        <h2 className="h2">About Us</h2>
        <p>
          {isSmallScreen && !isAboutExpanded
            ? `${aboutText.substring(0, textLimit)}...`
            : aboutText}
          {isSmallScreen && (
            <span
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="toggle-text-btn"
            >
              {isAboutExpanded ? " show less" : " more"}
            </span>
          )}
        </p>
        <div className="about_aboutus-btn">
          <button className="white">
            Learn more
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <div className="about_img">
        <img src={about} alt="about us" />
      </div>

      <div className="about_whyus">
        <h2 className="h2">Why Us</h2>
        <p>
          {isSmallScreen && !isWhyExpanded
            ? `${whyText.substring(0, textLimit)}...`
            : whyText}
          {isSmallScreen && (
            <span
              onClick={() => setIsWhyExpanded(!isWhyExpanded)}
              className="toggle-text-btn"
            >
              {isWhyExpanded ? " show less" : " more"}
            </span>
          )}
        </p>
        <div className="about_whyus-btn">
          <button className="white">
            Learn more
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

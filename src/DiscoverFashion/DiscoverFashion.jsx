import React, { useState, useEffect } from "react";

import "./discoverFashion.css";

const DiscoverFashion = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure in in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit `;

  const textLimit = 150;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="discover-fashion">
      <h2 className="h2">
        Discover fashion in <br /> a new way
      </h2>
      <p>
        {isSmallScreen && !isExpanded
          ? `${fullText.substring(0, textLimit)}...`
          : fullText}
        {isSmallScreen && (
          <span onClick={toggleText} className="toggle-text-btn">
            {isExpanded ? " show less" : " more"}
          </span>
        )}
      </p>
      <button className="white">Learn more</button>
    </div>
  );
};

export default DiscoverFashion;

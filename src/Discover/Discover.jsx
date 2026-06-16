import React, { useState } from "react";
import "./discover.css";
import discoverCards from "../discoverCards.js";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import searchIcon from "../assets/Search.png";

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = discoverCards.length;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  const getVisibleCards = () => {
    const offsets = [-1, 0, 1, 2];
    return offsets.map((offset) => {
      const index = (currentIndex + offset + total) % total;
      return { ...discoverCards[index], offset };
    });
  };

  return (
    <div className="discover">
      <div className="discover-main-container">
        <h2 className="h2">Discover</h2>
        <div className="navbar_search-container">
          <div className="navbar_search">
            <img src={searchIcon} alt="Search icon" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="navbar_search-responsive">
            <img src={searchIcon} alt="Search icon" />
          </div>
        </div>
      </div>

      <div className="discover-arrows_grid">
        <img
          src={arrowLeft}
          alt="arrow left"
          onClick={handlePrev}
          className="discover-arrow"
        />

        <div className="discover-track">
          {getVisibleCards().map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className={`discover-card offset-${Math.abs(card.offset)}`}
            >
              <img src={card.image} alt={card.title} />
            </div>
          ))}
        </div>

        <img
          src={arrowRight}
          alt="arrow right"
          onClick={handleNext}
          className="discover-arrow"
        />
      </div>
    </div>
  );
};

export default Discover;

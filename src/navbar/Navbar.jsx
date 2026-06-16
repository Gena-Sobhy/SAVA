import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

import logo from "../assets/logo.png";
import searchIcon from "../assets/Search.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const underlineRef = useRef(null);

  const linkRefs = {
    home: useRef(null),
    fashion: useRef(null),
    jewelry: useRef(null),
  };

  useEffect(() => {
    const activeEl = linkRefs[active]?.current;
    const underline = underlineRef.current;

    if (activeEl && underline) {
      const { offsetLeft, offsetWidth } = activeEl;
      underline.style.transform = `translateX(${offsetLeft}px)`;
      underline.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  const handleMobileLinkClick = (section) => {
    setActive(section);
    setToggleMenu(false);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img className="logo" src={logo} alt="SAVA logo" />
      </div>

      {/*  */}
      <div className="nav-container">
        {/* Main Desktop Links */}
        <div className="navbar_links">
          <div className="nav-list">
            <a
              href="#home"
              ref={linkRefs.home}
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
            <a
              href="#fashion"
              ref={linkRefs.fashion}
              className={active === "fashion" ? "active" : ""}
              onClick={() => setActive("fashion")}
            >
              Fashion
            </a>
            <a
              href="#jewelry"
              ref={linkRefs.jewelry}
              className={active === "jewelry" ? "active" : ""}
              onClick={() => setActive("jewelry")}
            >
              Jewelry
            </a>
          </div>
          <div className="underline" ref={underlineRef} />
        </div>

        {/* Search Section */}
        <div className="navbar_search-container">
          <div className="navbar_search">
            <img src={searchIcon} alt="Search icon" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="navbar_search-responsive">
            <img src={searchIcon} alt="Search icon" />
          </div>
        </div>

        {/* Account Section */}
        <div className="navbar_account">
          <button>Login</button>
          <img src={cart} alt="Cart icon" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
            style={{ cursor: "pointer" }}
          />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#home" onClick={() => handleMobileLinkClick("home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#fashion"
                    onClick={() => handleMobileLinkClick("fashion")}
                  >
                    Fashion
                  </a>
                </li>
                <li>
                  <a
                    href="#jewelry"
                    onClick={() => handleMobileLinkClick("jewelry")}
                  >
                    Jewelry
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

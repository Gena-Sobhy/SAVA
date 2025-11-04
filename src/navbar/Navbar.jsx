import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

import logo from '../assets/logo.png';
import searchIcon from '../assets/Search.png';
import cart from '../assets/cart.png';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const underlineRef = useRef(null);
  const linkRefs = {
    home: useRef(null),
    fashion: useRef(null),
    jewelry: useRef(null),
  };

  useEffect(() => {
    const activeEl = linkRefs[active].current;
    const underline = underlineRef.current;

    if (activeEl && underline) {
      const { offsetLeft, offsetWidth } = activeEl;
      underline.style.transform = `translateX(${offsetLeft}px)`;
      underline.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  return (
    <div className="navbar">
      <div className="nav logo">
        <img className="logo" src={logo} alt="SAVA logo" />
      </div>

      <div className="navbar_links">
        <div className="nav-list">
          <a
            href="#home"
            ref={linkRefs.home}
            className={active === 'home' ? 'active' : ''}
            onClick={() => setActive('home')}
          >
            Home
          </a>
          <a
            href="#fashion"
            ref={linkRefs.fashion}
            className={active === 'fashion' ? 'active' : ''}
            onClick={() => setActive('fashion')}
          >
            Fashion
          </a>
          <a
            href="#jewelry"
            ref={linkRefs.jewelry}
            className={active === 'jewelry' ? 'active' : ''}
            onClick={() => setActive('jewelry')}
          >
            Jewelry
          </a>
        </div>
        <div className="underline" ref={underlineRef} />
      </div>

      <div className="navbar_search">
        <img src={searchIcon} alt="Search icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar_account">
        <button>Login</button>
        <img src={cart} alt="Cart icon" />
      </div>
    </div>
  );
};

export default Navbar;

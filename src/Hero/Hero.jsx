import React from 'react'
import './hero.css'

import heroImage from '../assets/hero-img.png'
import pinkLogo from '../assets/pinkLogo.png'
import arrowRight from '../assets/arrow-right.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero_img">
            <img src={heroImage} alt="" />
        </div>

        <div className="hero_content">
            <h1>
                Welcome to 
            </h1>
            <img src={pinkLogo} alt="logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

            <div className="hero_buttons">
            <button className="transparent">Discover</button>
            <button className="white">Learn more
                <img className="arrow-right" src={arrowRight} alt="arrow-right" />
            </button>
        </div>
        </div>

        
    </div>
  )
}

export default Hero
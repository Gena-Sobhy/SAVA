import React from 'react'

import './about.css'

import about from '../assets/about.png'
import arrow from '../assets/arrow-right.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about_aboutus">
          <h2 className="h2">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div className="about_whyus-btn">
              <button className="white">
            Learn more
            <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default About
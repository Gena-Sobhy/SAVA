import React from 'react'
import './footer.css'

import footerLogo from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
            <div className="footer-content">

            <div className="footer-logo">
                <img src={footerLogo} alt="Footer Logo" />
                <p>Apt. 557 68317 Asley Well, Milagroville, NH 32205-1348</p>
            </div>

            <div className="footer-sava">
                <h3>SAVA</h3>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Overview</a></li>
                <li><a href="">Discover</a></li>
            </div>

            <div className="footer-contact">
                <h3>Contact</h3>
                <li><a href="">Email</a></li>
                <li><a href="">Pinterest</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Twitter</a></li>
            </div>
        </div>

        < div className='footer-div' />
    </div>
  )
}

export default Footer
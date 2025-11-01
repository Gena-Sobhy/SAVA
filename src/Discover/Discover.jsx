import React from 'react'

import './discover.css'
import discoverCards from '../discoverCards.js'
import arrowRight from "../assets/arrow-right.svg"
import arrowLeft from "../assets/arrow-left.svg"

import searchIcon from "../assets/Search.png"
const Discover = () => {
return (
<div className='discover'>
    <h2 className="h2">Discover</h2>
    <div className="navbar_search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search..." /> 
    </div>

    <div className="discover-arrows_grid">
        <img src={arrowLeft} alt="arrow left" />

    <div className="discover-grid">
        {discoverCards.map((card) => (
            <div key={card.id} className="discover-card">
                <img src={card.image} alt={card.title} />
            </div>
        ))}
    </div>

        <img src={arrowRight} alt="arrow right" />
    </div>


</div>
)
}

export default Discover
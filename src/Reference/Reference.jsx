import React from 'react'
import './reference.css'

import fashionRight from "../assets/fashion-right.png"
import fashionLeft from "../assets/fashion-left.png"
import reference from "../assets/reference.jpg"

const Reference = () => {
  return (
    <div className='reference'>
        <div className="img-left">
            <img src={fashionLeft} alt="Fashion text left" />
        </div>

        <div className="reference_content">
            <p>DEVIATION AS A REFERENCE POINT</p>
            <div className="reference-image">
                <img src={reference} alt="Reference" />
            </div>
        </div>
        

        <div className="img-right">
            <img src={fashionRight} alt="Fashion text right" />
        </div>
    </div>
  )
}

export default Reference
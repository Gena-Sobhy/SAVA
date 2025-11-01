import React from 'react'
import './popular.css'

import { popular } from '../collection.js';

const Popular = () => {
  return (
    <div className='popular'>
            <h2 className="h2">Popular products</h2>  
            <p>Not made to fit in—made to be remembered.</p>
            
            <div className="popular-grid">
                {popular.map((card) => (
                <div key={card.id} className="container collection-card">
                  <p>|||   Popular ON March   |||</p>
                    <img src={card.image} alt={card.title} />
                    <p>Fashion SAVA <span>2025</span></p>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Popular
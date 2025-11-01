import React from 'react'

import './newCollection.css'
import { newCollection } from '../collection.js';

const NewCollection = () => {
  return (
    <div className='collection'>
        <h2 className="h2">New Collection</h2>  
        <p>Luxury, reimagined in motion and mood.</p>
        
        <div className="new-collection-grid">
            {newCollection.map((card) => (
            <div key={card.id} className="container collection-card">
              <p>||| SALES START ON OCTOBER |||</p>
                <img src={card.image} alt={card.title} />
                <p>Fashion SAVA <span>2026</span></p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default NewCollection
import React from 'react'
import './pastCollections.css'

const PastCollections = () => {
  return (
    <div className='past-collections'>
        <div className="past-collections_header">
            <div className="past-collections_header-pt1">
                <h2 className='h2'>Past Collections</h2>
                <p className='p_pt1'>Every Season has its own personality, But none of them can be forgotten</p>
            </div>
            <div className="past-collections_header-pt2">
                <h2 className='pt2'>Archieve items</h2>
                <p className='p_pt2'>Everything that went beyond the limit became real.</p>
            </div>
        </div>

        <div className="past-collections_items"> 
            <p className='number'>[1] <p className='text'> <span>2020</span> Threaded with Fire</p></p>
            <p className='number'>[2] <p className='text'> <span>2021</span> Clean Lines, Messy Heart</p></p>
            <p className='number'>[3] <p className='text'> <span>2022</span> Luxury in Rebellion</p></p>
            <p className='number'>[4] <p className='text'> <span>2023</span> Curated Chaos</p></p>
            <p className='number'>[5] <p className='text'> <span>2024</span> Disobedient Grace</p></p>
        </div>
    </div>
  )
}

export default PastCollections
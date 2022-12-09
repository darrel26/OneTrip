import React from 'react'
import './PlacePreview.style.css'
const PlacePreview = ({index, placeName, placeDesc, placeImg}) => {
    return (
    <div className='preview-container'>
        <div className='preview-word'>
            <div className='preview-title'>
                <p>{index+1}</p>
                <h5>{placeName}</h5>
            </div>
            <div className='preview-desc'>
                <p>{placeDesc}</p>
            </div>
        </div>
        <div className='preview-image'>
            <img src={placeImg} alt="Place destination"/>
        </div>
    </div>
  )
}

export default PlacePreview
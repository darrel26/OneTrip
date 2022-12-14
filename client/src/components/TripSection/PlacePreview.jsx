import React from 'react'
import './PlacePreview.style.css'
const PlacePreview = ({ index, placeName, placeDesc, placeImg, rating }) => {
	return (
		<div className="preview-container">
			<div className="preview-word">
				<div className="preview-title">
					<p>{index+1}</p>
					<h5>{placeName}</h5>
				</div>
				<div className="preview-desc">
					<h5>Rating : <span role="img" aria-labelledby="star-icon">⭐</span>{rating}/5</h5>
					<p>{placeDesc}</p>
				</div>

			</div>
			<div className="preview-image">
				<img src={placeImg} alt="Place destination"/>
			</div>
		</div>
	)
}

export default PlacePreview
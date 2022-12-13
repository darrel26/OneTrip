import React from 'react'
import './FeatureSection.style.css'
import Feature1 from '../../assets/Feature-1.svg'
import Feature2 from '../../assets/Feature-2.svg'
import Feature3 from '../../assets/Feature-3.svg'

const FeatureSection = () => {
	return (
		<div className="feature-container">
			<div className="feature-content">
				<img src={Feature1} alt="Feature 1"/>
				<img src={Feature2} alt="Feature 2"/>
				<img src={Feature3} alt="Feature 3"/>
			</div>
		</div>
	)
}

export default FeatureSection
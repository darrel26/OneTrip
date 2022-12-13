import React from 'react'
import './AboutUs.style.css'
import AboutUsImage from '../../assets/AboutUs.jpg'

const AboutUs = () => {
	return (
		<div className="aboutus-container">
			<div className="aboutus-content">
				<div className="description">
					<h1>ABOUT US</h1>
					<br/>
					<p>One Trip is a trip planner app for users to determine the destination 
            of the tourist attractions they will go to. This app should help users, 
            to collect information about the places they want to go based on 
            their location choices, and plan their trip.
					</p>
					<br/>
					<br/>
					<button>READ MORE</button>
				</div>
				<div className="image-description">
					<img src={AboutUsImage} alt="Dummy"/>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
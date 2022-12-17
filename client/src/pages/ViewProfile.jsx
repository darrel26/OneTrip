import React from 'react'
import ProfileSection from '../components/ViewProfile/ProfileSection'
import './ViewProfile.style.css'
const ViewProfile = () => {
	return (
		<div className="profile-container">
			<div className="profile-section">
				<ProfileSection/>
			</div>
			<div className="list-trip-section">
				<p>Fake</p>
			</div>
		</div>
	)
}

export default ViewProfile
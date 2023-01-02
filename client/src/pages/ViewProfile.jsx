import React from 'react'
import ListTrip from '../components/ViewProfile/ListTrip'
import ProfileSection from '../components/ViewProfile/ProfileSection'
import './ViewProfile.style.css'
const ViewProfile = () => {
	return (
		<div className="profile-container">
			<div className="profile-section">
				<ProfileSection/>
			</div>
			<div className="list-trip-section">
				<ListTrip/>
			</div>
		</div>
	)
}

export default ViewProfile
import React from 'react'
import OneTrip from '../Logo/OneTrip'
import userIcon from '../../assets/UserIcon.svg'
import './ProfileSection.style.css'

const ProfileSection = () => {
	return (
		<div className="profile-section-container">
			<OneTrip/>
			<div className="profile-save-section">
				<img src={userIcon} alt="Profile-icon"/>
				<div className="profile-button">
					<button>EDIT PROFILE</button>
					<button id="save-profile">SAVE CHANGES</button>
				</div>
			</div>
			<div className="user-information-section">
				<div className="user-information">
					<label>Username</label>
				    <input/>
				</div>
				<div className="user-information">
					<label>Email</label>
				    <input type="email"/>
				</div>
				<div className="user-information">
					<label>Created At</label>
				    <input/>
				</div>
			</div>
		</div>
	)
}

export default ProfileSection
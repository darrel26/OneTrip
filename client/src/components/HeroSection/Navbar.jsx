import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.style.css';
import OneTrip from '../Logo/OneTrip';
import Modal from '../Modals/Modal';
import userIcon from '../../../src/assets/UserIcon.svg';
import axios from 'axios';
import getCookie from '../../utils/cookies';
import { errorAlert } from '../../utils/notificationAlert';

const Navbar = ({ heroSectionId, featureSectionid, aboutUsid }) => {
	const [ modal, setModal ] = useState(false);
	const [ section, setSection ] = useState(null);
	const [ loginStatus, setLoginStatus ] = useState(false);
	const [ userData, setDataUser ] = useState(null)

	const viewProfile = async () => {
		const authToken = getCookie('token');
		const userId = getCookie('userId');
    
		const request = axios.get(
			`${process.env.REACT_APP_BASE_URL}/users/${userId}`,
			{
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
			}
		);
    
		await request
			.then(result => {
				setDataUser(result.data)
			})
			.catch(error => {
				const { status, message } = error.response.data.error;
				errorAlert(status, message).then(() => window.location.reload());
			});	
	};

	useEffect(() => {
		viewProfile()
	},[ loginStatus ])

	return (
		<div className="herosection-nav">
			<OneTrip />
			<div className="herosection-navbar">
				<a href={`#${heroSectionId}`}>HOME</a>
				<a href={`#${featureSectionid}`}>FEATURE</a>
				<a href={`#${aboutUsid}`}>ABOUT US</a>
			</div>
			{loginStatus ? (
				<div className="herosection-user">
					<img src={userIcon} alt="user-icon" onClick={viewProfile}></img>
					<div className="drop-down-menu">
						<h1>{userData.username}</h1>
						<div className="drop-down-content">
							<Link className="link-nav" to="#">Profile</Link>
							<Link className="link-nav" to="#">Log Out</Link>
						</div>
					</div>
				</div>
			) : (
				<div className="herosection-user">
					<li
						onClick={() => {
							setModal(!modal);
							setSection('login');
						}}
					>
            LOGIN
					</li>
					<li
						onClick={() => {
							setModal(!modal);
							setSection('signup');
						}}
						id="sign-up"
					>
            SIGN UP
					</li>
					{modal && (
						<Modal
							setModal={setModal}
							sections={section}
							setLoginStatus={setLoginStatus}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Navbar;
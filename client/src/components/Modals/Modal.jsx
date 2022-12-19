import React, { useState } from 'react';

import Close from '../../assets/close.svg';

import './Modal.style.css';
import OneTrip from '../Logo/OneTrip';
import SectionLogin from './Sections/SectionLogin';
import SectionSignup from './Sections/SectionSignup';

const Modal = ({ setModal, sections, setLoginStatus, setUsername }) => {
	const [ section, setSection ] = useState(sections);

	return (
		<div className="modal-container">
			<div className="modal-content">
				<div className="modal-close">
					<img onClick={() => setModal(false)} src={Close} alt="Close button" />
				</div>
				<div className="modal-header">
					<OneTrip />
				</div>
				{section === 'login' ? (
					<SectionLogin
						section={setSection}
						setLoginStatus={setLoginStatus}
						setUsername={setUsername}
					/>
				) : (
					<SectionSignup section={setSection} />
				)}
			</div>
		</div>
	);
};

export default Modal;
import React, { useRef } from 'react'
import axios from 'axios'
import { succesToast, errorAlert } from '../../../utils/notificationAlert'
import './SectionLogin'

const SectionSignup = ({ section }) => {
	const signup_email = useRef()
	const signup_username = useRef()
	const signup_pass = useRef()
	const signup_re_pass = useRef()

	const handleOnSignUp = async (e) => {
		e.preventDefault();
    
		const userData = {
			email: signup_email.current.value,
			username: signup_username.current.value,
			password: signup_pass.current.value
		}

		const request = axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData);
		await request
			.then(({ data }) => {
				const { message } = data;
				succesToast(message);
			}).catch(error => {
				const { status, message } = error.response.data.error
				errorAlert(status, message)
			})
	}

	return (
		<form onSubmit={handleOnSignUp}>
			<div className="modal-body">
				<label>Email</label>
				<input type="text" ref={signup_email} placeholder="email"/>
				<label>Username</label>
				<input type="text" ref={signup_username} placeholder="username"/>
				<label>Password</label>
				<input type="password" ref={signup_pass} placeholder="password"/>
				<label>Repeat Password</label>
				<input type="password" ref={signup_re_pass} placeholder="repeat password"/>
			</div>
			<div className="modal-button-container">
				<button>Sign up</button>
			</div>
			<div className={`modal-footer`}>
				<p>Already have account? <span onClick={() => {
					section('login')
				}}>Login Here</span></p>
			</div>
		</form>
	)
}

export default SectionSignup
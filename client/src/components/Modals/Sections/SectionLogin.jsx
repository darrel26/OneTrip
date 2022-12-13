import React, { useRef } from 'react';
import { succesToast, errorAlert } from '../../../utils/notificationAlert';
import axios from 'axios';
import './Section.style.css';

const SectionLogin = ({ section, setLoginStatus }) => {
  const login_username_email = useRef();
  const login_pass = useRef();

  const login = async (e) => {
    e.preventDefault();

    const userCredential = {
      email: login_username_email.current.value,
      password: login_pass.current.value,
    };

    const request = axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      userCredential
    );
    await request
      .then(({ data }) => {
        const { id, authToken, message } = data;
        document.cookie = `userId=${id}`;
        document.cookie = `token=${authToken}`;
        setLoginStatus(true);
        succesToast(message);
      })
      .catch((error) => {
        const { status, message } = error.response.data.error;
        errorAlert(status, message);
      });
  };

  return (
    <form onSubmit={login}>
      <div className="modal-body">
        <label>Email</label>
        <input type="text" ref={login_username_email} placeholder="email" />
        <label>Password</label>
        <input type="password" ref={login_pass} placeholder="password" />
      </div>
      <div className="modal-button-container">
        <button>Login</button>
      </div>
      <div className={`modal-footer`}>
        <p>
          Don't have an account?{' '}
          <span
            onClick={() => {
              section('signup');
            }}
          >
            Register Here
          </span>
        </p>
      </div>
    </form>
  );
};

export default SectionLogin;

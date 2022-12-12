import React, {useRef} from 'react'
import { userLogin } from '../../../utils/service'
import { succesToast, errorAlert } from '../../../utils/notificationAlert'
import './Section.style.css'

const SectionLogin = ({section}) => {
  const login_username_email = useRef()
  const login_pass = useRef()

  const handleOnLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: login_username_email.current.value,
      password: login_pass.current.value
    }

    try {
      await userLogin(userData)
        .then(({authToken, message}) => {
          document.cookie = `token=${authToken}`
          succesToast(message);
        });
    } catch (error) {
      const { status, message } = error.response.data.error
      errorAlert(status, message)
    };
  }

  return (
    <form onSubmit={handleOnLogin}>
      <div className="modal-body">
            <label>Email</label>
            <input type="text" ref={login_username_email}  placeholder="email"/>
            <label>Password</label>
            <input type="password" ref={login_pass}  placeholder="password"/>
        </div>
        <div className='modal-button-container'>
            <button>Login</button>
        </div>
        <div className={`modal-footer`}>
          <p>Don't have an account? <span onClick={() =>{
            section('signup')
          }}>Register Here</span></p>
      </div>
    </form>
  )
}

export default SectionLogin
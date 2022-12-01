import React, {useRef} from 'react'
import './Section.style.css'

const SectionLogin = ({section}) => {
  const login_username_email = useRef()
  const login_pass = useRef()
  return (
    <>
      <div className="modal-body">
            <label>Email or username</label>
            <input type="text" ref={login_username_email}  placeholder="email or username"/>
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
    </>
  )
}

export default SectionLogin
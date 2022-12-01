import React, {useRef} from 'react'
import './SectionLogin'

const SectionSignup = ({section, email, username, pass, re_pass}) => {
  const signup_email = useRef()
  const signup_username = useRef()
  const signup_pass = useRef()
  const signup_re_pass = useRef()
  return (
    <>
      <div className="modal-body">
            <label>Email</label>
            <input type="text" ref={signup_email} placeholder="email"/>
            <label>Username</label>
            <input type="text" ref={signup_username} placeholder="username"/>
            <label>Password</label>
            <input type="text" ref={signup_pass}  placeholder="password"/>
            <label>Repeat Password</label>
            <input type="password" ref={signup_re_pass}  placeholder="repeat password"/>
        </div>
        <div className='modal-button-container'>
            <button>Sign up</button>
        </div>
        <div className={`modal-footer`}>
          <p>Already have account? <span onClick={() =>{
            section('login')
          }}>Login Here</span></p>
      </div>
    </>
  )
}

export default SectionSignup
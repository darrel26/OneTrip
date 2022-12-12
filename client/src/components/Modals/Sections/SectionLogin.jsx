import React, {useRef} from 'react'
import { userLogin } from '../../../utils/service'
import './Section.style.css'

const SectionLogin = ({section}) => {
  const login_username_email = useRef()
  const login_pass = useRef()

  const handleOnLogin = async (e) => {
    
    e.preventDefault();

    console.log(login_username_email, login_pass)

    const userData = {
      email: login_username_email.current.value,
      password: login_pass.current.value
    }

    return await userLogin(userData);
  }


  return (
    <form onSubmit={handleOnLogin}>
      <div className="modal-body">
            <label>Email</label>
            <input minLength="6"
              autoComplete='off'
              type="email" 
              ref={login_username_email} 
              required
            />
            <label>Password</label>
            <input 
              minLength="6" 
              autoComplete='off' 
              type="password" 
              ref={login_pass}  
              placeholder="password"
              required
            />
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
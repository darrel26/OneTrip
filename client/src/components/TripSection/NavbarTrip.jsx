import React from 'react'
import {Link} from 'react-router-dom'
import OneTrip from '../Logo/OneTrip'
import user from '../../assets/UserIcon.svg'
import './NavbarTrip.style.css'

  const NavbarTrip = () => {
    return (
    <div className='navbartrip-container'>
        <div className='navbar-logo'><Link id='no-decoration' to="/"><OneTrip/></Link></div>
        <div className='navbar-usericon'>
          <Link to="#"><img src={user} alt='User icon'/></Link>
        </div>
    </div>
  )
}

export default NavbarTrip
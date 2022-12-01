import React, {useState} from 'react'
import './Navbar.style.css'
import OneTrip from '../Logo/OneTrip'
import Modal from '../Modals/Modal'

const Navbar = () => {
  const [modal, setModal] = useState(false)
  const [section, setSection] = useState(null)
  return (
    <div className='herosection-nav'>
        <OneTrip/>
        <div className='herosection-navbar'>
            <li>HOME</li>
            <li>FEATURE</li>
            <li>ABOUT US</li>
        </div>
        <div className='herosection-user'>
            <li onClick={() => {
                setModal(!modal)
                setSection('login')
            }}>LOGIN</li>
            <li onClick={() =>{
                setModal(!modal)
                setSection('signup')
            }} id='sign-up'>SIGN UP</li>
        </div>
        {modal && <Modal setModal={setModal} sections={section}/>}
    </div>
  )
}

export default Navbar
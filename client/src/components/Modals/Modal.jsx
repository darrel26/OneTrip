import React, {useState} from 'react'
import './Modal.style.css'
import OneTrip from '../Logo/OneTrip'
import SectionLogin from './Sections/SectionLogin'
import SectionSignup from './Sections/SectionSignup'

const Modal = ({setModal, sections}) => {
  const [section,setSection] = useState(sections)

  return (
    <div onClick={() => setModal(false)} className="modal-container">
      <div className="modal-content">
        <div className='modal-header'>
            <OneTrip/>
        </div>
        {
          section === 'login' ? 
          <SectionLogin section={setSection}/> 
          :<SectionSignup section={setSection}/>
        }
      </div>
    </div>
  )





}

export default Modal
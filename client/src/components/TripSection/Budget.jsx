import React from 'react'
import './Budget.style.css'
import Dolar from '../../assets/Dolar-icon.svg'
import Setting from '../../assets/Settings.svg'

const Budget = ({value}) => {
  return (
    <div className='budget-container'>
        <div className='value-container'>
            <div className='value'>
                <img id='dolarIcon' src={Dolar} alt="Dolar icon"/>
                <h1><span id='IDR'>IDR</span> {value}</h1>
            </div>
        </div>
        <div className="edit-budget">
            <div className='edit-conf'>
                <img src={Setting} alt="setting icon"/>
                <p>Edit Budget</p>
            </div>
        </div>
    </div>
  )
}

export default Budget
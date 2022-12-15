import React, { useState, useRef } from 'react'
import './Budget.style.css'
import Dolar from '../../assets/Dolar-icon.svg'
import Setting from '../../assets/Settings.svg'

const Budget = ({ value, setValue }) => {
	const editbudget = useRef()
	const [ edtitable, setEditable ] = useState(true)
	return (
		<div className="budget-container">
			<div className="value-container">
				<div className="value">
					<img id="dolarIcon" src={Dolar} alt="Dolar icon"/>
					<h1>IDR</h1>
					<input id="edits" ref={editbudget} disabled={edtitable} type="number" defaultValue={value}/>
				</div>
				<button onClick={() => {
					setValue(editbudget.current.value)
					setEditable(true)
				}} className={edtitable === true ? "button-hide" : "button-show"}>save</button>
			</div>
			<div className="edit-budget">
				<label htmlFor="edits" onClick={() => setEditable(!edtitable)} className="edit-conf">
					<img src={Setting} alt="setting icon"/>
					<p>Edit Budget</p>
				</label>
			</div>
		</div>
	)
}

export default Budget
import React, { useState, useRef } from 'react'
import './Budget.style.css'

const Budget = ({ value, setValue }) => {
	const editbudget = useRef()
	const [ edtitable, setEditable ] = useState(true)
	return (
		<div className="budget-container">
			<div className="value-container">
				<div className="value">
					<h1>IDR</h1>
					<input ref={editbudget} id="edits" disabled={edtitable} type="number" defaultValue={value}/>
				</div>
			</div>
			<div className="edit-budget">
				<label htmlFor="edits" onClick={() => setEditable(!edtitable)} className="edit-conf">
					<p>EDIT BUDGET</p>
				</label>
				<button onClick={() => {
					setValue(editbudget.current.value)
					setEditable(true)
				}} className={edtitable === true ? "button-hide" : "button-show"}>SAVE</button>
			</div>
		</div>
		
	)
}

export default Budget
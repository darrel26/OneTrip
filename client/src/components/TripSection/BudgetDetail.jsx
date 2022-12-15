import React, { useState } from 'react'
import './BudgetDetail.style.css'
import close from '../../assets/close.svg'
import dollar from '../../assets/cash-out.svg'
import notes from '../../assets/notes_icon.svg'

const BudgetDetail = ({ setState, setBudget }) => {
	const [ message, setError ] = useState('')
	const [ inputBudget, setInputBudget ] = useState(0)
	const [ select, setSelect ] = useState(null)

	const valdiate = () => {
		if (inputBudget <= 0 && select === null) {
			setError("Fill all the form first please!")
			return
		}
		setError("")
		setState(false)
		setBudget(prevItem => [ ...prevItem, { to:select,expenses:inputBudget } ])
	}
	return (
		<div className="modal-container">
			<div className="modal-budget-detail">
				<div className="modal-budget-header">
					<p></p>
					<h1>Add Expenses</h1>
					<img onClick={() => setState(false)} src={close} alt="Close icon"/>
				</div>
				<div className="modal-budget-content">
					<div className="input-budget">
						<label htmlFor="cash"><img src={dollar} alt="Dolar"/></label>
						<input onChange={(e) => setInputBudget(e.target.value)} type="number" id="cash" placeholder="Input Budget"/>
					</div>
					<div className="input-budget">
						<label><img src={notes} alt="Dolar"/></label>
						<select onChange={(e) => setSelect(e.target.value)} className="select-budget" name="budget-expend" id="budget">
							<option value="Empty" disabled selected hidden>Please choose...</option>
							<option value="🏩 Hotel"><span role="img" aria-labelledby="img-hotel">🏩</span> Hotel</option>
							<option value="🚌 Transportation"><span role="img" aria-labelledby="img-transport">🚌</span> Transportation</option>
							<option value="🍴 Food"><span role="img" aria-labelledby="img-food">🍴</span> Food</option>
							<option value="🛍️ Shopping"><span role="img" aria-labelledby="img-shopping">🛍️</span> Shopping</option>
							<option value="🎗️ Other"><span role="img" aria-labelledby="img-other">🎗️</span> Other</option>
						</select>
					</div>
					<p>{message}</p>
				</div>
				<button onClick={valdiate}>Save</button>
			</div>
		</div>
	)
}

export default BudgetDetail
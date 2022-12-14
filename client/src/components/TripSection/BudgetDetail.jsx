import React from 'react'
import './BudgetDetail.style.css'
import close from '../../assets/close.svg'
import dollar from '../../assets/cash-out.svg'
import notes from '../../assets/notes_icon.svg'

const BudgetDetail = (props) => {
	const { setState } = props
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
						<input type="number" id="cash" placeholder="Input Budget"/>
					</div>
					<div className="input-budget">
						<label><img src={notes} alt="Dolar"/></label>
						<select className="select-budget" name="budget-expend" id="budget">
							<option value="" disabled selected hidden>Please choose...</option>
							<option value="1"><span role="img" aria-labelledby="img-hotel">🏩</span> Hotel</option>
							<option value="2"><span role="img" aria-labelledby="img-transport">🚌</span> Transportation</option>
							<option value="3"><span role="img" aria-labelledby="img-food">🍴</span> Food</option>
							<option value="4"><span role="img" aria-labelledby="img-shopping">🛍️</span> Shopping</option>
							<option value="5"><span role="img" aria-labelledby="img-other">🎗️</span> Other</option>
						</select>
					</div>
				</div>
				<button onClick={() => setState(false)}>Save</button>
			</div>
		</div>
	)
}

export default BudgetDetail
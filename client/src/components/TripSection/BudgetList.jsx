import React from 'react'
import './BudgetList.style.css'

const BudgetList = ({ data }) => {
	return (
		<table className="table-budget">
			{data.map((item, index) => (
				<tbody key={index}>
					<tr className="budget">
						<th>{item.to}</th>
						<td>IDR {item.expenses}</td>
					</tr>
				</tbody>			
			))}    
		</table>
	)
}

export default BudgetList
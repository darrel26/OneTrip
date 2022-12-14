import React, { useState } from 'react'
import './BudgetList.style.css'

const BudgetList = ({ data }) => {
	// eslint-disable-next-line
  const [dataDetail, setDataDetail] = useState(data)
	return (
		<table className="table-budget">
			{dataDetail.map((item, index) => (
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
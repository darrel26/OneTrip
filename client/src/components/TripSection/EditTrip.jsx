import React, { useRef, useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';

import chevron from '../../assets/Chevron-icon.svg'
import gps from '../../assets/gps.svg'
import plus from '../../assets/plus.svg'
import calendar from '../../assets/Calendar-icon-trip.svg'
import { placeVisit } from '../../DummyData'

import './EditTrip.style.css'
import PlacePreview from './PlacePreview'
import Budget from './Budget'
import BudgetList from './BudgetList';

const EditTrip = () => {
	// eslint-disable-next-line
  const [dataTrip , setDataTrip] = useState(placeVisit);
	const [ isOpen, setIsOpen ] = useState(true);
	const [ isOpenBudget, setIsOpenBudget ] = useState(true);
	const addPlace = useRef();

	return (
		<div className="edit-trip-container">
			<div className="trip-title">
				<h1 id="placeTitle">{placeVisit.tripName}</h1>
				<button>SAVE TRIP</button>
			</div>
			<div className="date-trip">
				<img src={calendar} alt="Calendar"/>
				<h3>{`${placeVisit.dateStart} - ${placeVisit.dateEnd}`}</h3>
			</div>
			<div className="accordion">
				<div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
					<img className="toggle" src={chevron} alt="chevron icon" aria-expanded={isOpen}/>
					<h1 className="title">Places to visit</h1>
				</div>
				<div className="accordion-content" aria-expanded={!isOpen}>
					{dataTrip.trip.map((item, index) => (
						<PlacePreview key={item.objectId} placeImg={item.image} index={index} placeDesc={item.description} placeName={item.placeName}/>
					))}
					<div className="add-place-container">
						<div className="add-place-input">
							<label htmlFor="placeInputAutoComplete"><img src={gps} alt="GPS Icon"/></label>
							<Autocomplete
								className="auto-complete-add-place"
								restrictions={{ country: "id" }}
							>
								<input autoCapitalize="off" ref={addPlace} id="placeInputAutoComplete"/>
							</Autocomplete>
						</div>
						<div className="add-place-button">
							<p>   </p>
							<h4>ADD PLACE</h4>
							<img src={plus} alt="Plus Icon"/>
						</div>
					</div>
				</div>
			</div>

			<div className="accordion">
				<div className="accordion-title-budget">
					<div className="budget-title" onClick={() => setIsOpenBudget(!isOpenBudget)}>
						<img className="toggle" src={chevron} alt="chevron icon" aria-expanded={isOpenBudget}/>
						<h1 className="title">Budgetting</h1>
					</div>
					<button>ADD EXPENSES</button>
				</div>
				<div className="accordion-content" aria-expanded={!isOpenBudget}>
					<Budget value={dataTrip.budgetData.targetBudget}/>
					<BudgetList data={dataTrip.budgetData.budgetDetail}/>
				</div>
			</div>
		</div>
	)
}

export default EditTrip
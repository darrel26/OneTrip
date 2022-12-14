import React, { useRef, useState, useEffect } from 'react'
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

const EditTrip = ({ center }) => {
	// eslint-disable-next-line
  const [dataTrip , setDataTrip] = useState(placeVisit)
	const [ isOpen, setIsOpen ] = useState(true)
	const [ isOpenBudget, setIsOpenBudget ] = useState(true)
	const [ placeInput, setPlaceInput ] = useState()
	let dataInput = useRef()
	// trip data 
	const [ tripData, setTripData ] = useState([])
	const [ placeDetail, setPlaceDetail ] = useState()
	
	useEffect(() => {
		console.log(tripData)
	}, [ tripData ])

	const getPlaceDetail = () => {
		setPlaceDetail(placeInput.getPlace())
	}

	const addPlace = () => {
		tripData.length === 0 ? 
			setTripData([
				placeDetail
			]) :
			setTripData([
				...tripData,
				placeDetail
			])
		dataInput.current.value = ""
	}

	return (
		<div className="edit-trip-container">
			<div className="content-container">
				<div className="title-container">
					<div className="trip-title">
						<h1 id="placeTitle">{placeVisit.tripName}</h1>
						<button>SAVE TRIP</button>
					</div>
					<div className="date-trip">
						<img src={calendar} alt="Calendar"/>
						<h3>{`${placeVisit.dateStart} - ${placeVisit.dateEnd}`}</h3>
					</div>
				</div>
				{/* Place to Visit */}
				<div className="accordion">
					<div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
						<img className="toggle" src={chevron} alt="chevron icon" aria-expanded={isOpen}/>
						<h1 className="title">Places to visit</h1>
					</div>
					<div className="accordion-content" aria-expanded={!isOpen}>
						{
							tripData.map(({ place_id, photos, formatted_address, name, rating }, index) => {
								return <PlacePreview 
									key={place_id} 
									placeImg={photos[0].getUrl()} 
									index={index} 
									placeDesc={formatted_address} 
									placeName={name} 
									rating={rating} />
							}) 
						}
					</div>
				</div>

				<div className="add-place-container">
					<div className="add-place-input">
						<label htmlFor="placeInputAutoComplete"><img src={gps} alt="GPS Icon"/></label>
						<Autocomplete
							className="auto-complete-add-place"
							bounds={
								{ 
									north: center.lat + 0.1,
									south: center.lat - 0.1,
									east: center.lng + 0.1,
									west: center.lng - 0.1,
								}
							}
							options={
								{
									strictBounds: true,
									fields: [ "formatted_address", "name", "geometry", "photos", "place_id", "rating" ]
								}
							}
							onLoad={
								(autocomplete) => {
									setPlaceInput(autocomplete)
								}
							}
							// geometry -> lat, lng
							// photos
							// place_id
							// rating
							// html_attribution -> name
							onPlaceChanged={getPlaceDetail}
						>
							<input ref={dataInput} autoCapitalize="off" id="placeInputAutoComplete"/>
						</Autocomplete>
					</div>
					<div className="add-place-button" onClick={addPlace}>
						<p>   </p>
						<h4>ADD PLACE</h4>
						<img src={plus} alt="Plus Icon"/>
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
		</div>
	)
}

export default EditTrip
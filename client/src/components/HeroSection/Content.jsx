import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'

import Location from '../../assets/gps.svg'
import Plus from '../../assets/plus.svg'
import Calendar from '../../assets/calendar.svg'

import './Content.stye.css'

const Content = () => {
	const [ startDate, setStartDate ] = useState(null)
	const [ endDate, setEndDate ] = useState(null)

	return (
		<div className="herosection-content">
			<h1>Planning for your trip, will make the trip even better!</h1>
			<h2>Build and Organize your trip, in a free trip planner web application designed for your vacations. Make your trip and start your journey!</h2>
			<div className="herosection-contenttrip">
				<div className="content-input city">
					<img src={Location} alt="Location logo"/>
					<Autocomplete>
						<input className="hero-input location-autocomplete" placeholder="City, Destination"/>
					</Autocomplete>
				</div>
				<div className="content-input date">
					<img src={Calendar} alt="Location logo"/>
					<Datepicker
						className="hero-input datepicker"
						selected={startDate}
						onChange={ (date) => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						placeholderText="Start date"
						dateFormat="dd MMM yyyy"
						maxDate={endDate}
						required
					/>
				</div>
				<div className="content-input date no-border">
					<img src={Calendar} alt="Location logo"/>
					<Datepicker
						className="hero-input datepicker"
						selected={endDate}
						onChange={ (date) => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						placeholderText="End date"
						dateFormat="dd MMM yyyy"
						minDate={startDate}
						required
					/>
				</div>
				<div className="content-button">
					<Link id="addTripButton" to="/trip"><img src={Plus} alt="plus icon"/></Link>
				</div>
			</div>
		</div>
	)
}

export default Content
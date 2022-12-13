import React from 'react'
import './TripPage.style.css'
import GoogleMap from '../components/GoogleMapSection/GoogleMapSection'
import NavbarTrip from '../components/TripSection/NavbarTrip'
import EditTrip from '../components/TripSection/EditTrip'

const TripPage = () => {
	const center = {
		lat: -3.745,
		lng: -38.523
	};

	return (
		<div className="trippage-maincontainer">
			<div className="trippage-container-left">
				<NavbarTrip/>
				<EditTrip/>
			</div>
			<div className="trippage-container-right">
				<GoogleMap mapCenter={center}/>
			</div> 
		</div>
	)
}

export default TripPage
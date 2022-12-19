import React from 'react'
import './TripPage.style.css'
import GoogleMap from '../components/GoogleMapSection/GoogleMapSection'
import NavbarTrip from '../components/TripSection/NavbarTrip'
import EditTrip from '../components/TripSection/EditTrip'

let placeServices;
let geocoder;
let directionServices;
let directionsRenderer;
let pos;

const TripPage = () => {

	const center = {
		lat: -6.914864,
		lng: 107.608238
	};

	const onLoad = (map) => {
		geocoder = new google.maps.Geocoder();
		directionServices = new google.maps.DirectionsService();
		directionsRenderer = new google.maps.DirectionsRenderer({
			preserveViewport: true,
			suppressMarkers: true,
		});
	}

	return (
		<div className="trippage-maincontainer">
			<div className="trippage-container-left">
				<NavbarTrip/>
				<EditTrip center={center}/>
			</div>
			<div className="trippage-container-right">
				<GoogleMap mapCenter={center} onMapLoad={onLoad}/>
			</div> 
		</div>
	)
}

export default TripPage
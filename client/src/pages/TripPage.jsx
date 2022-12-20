/* eslint-disable no-undef */
import React, { useState } from 'react'
import './TripPage.style.css'
import GoogleMap from '../components/GoogleMapSection/GoogleMapSection'
import NavbarTrip from '../components/TripSection/NavbarTrip'
import EditTrip from '../components/TripSection/EditTrip'

const TripPage = () => {
	const [ tripPlace, setTripPlace ] = useState([])
	const [ nearbyPlaces, setNearbyPlaces ] = useState([])
	let placeServices;

	const center = {
		lat: -6.914864,
		lng: 107.608238
	};

	const getPlaceRecomendations = (location) => {
		return {
			location,
			radius: '500',
			query: 'places',
			fields: [ "name", "photos", "place_id", "rating" ]
		}
	}

	const onLoad = (map) => {
		placeServices = new google.maps.places.PlacesService(map);
		placeServices.textSearch(getPlaceRecomendations(center), (response) => {
			setNearbyPlaces(response)
			console.log(response);
		})
	}

	return (
		<div className="trippage-maincontainer">
			<div className="trippage-container-left">
				<NavbarTrip/>
				<EditTrip center={center} nearby={nearbyPlaces} tripData={tripPlace} setTripData={setTripPlace}/>
			</div>
			<div className="trippage-container-right">
				<GoogleMap mapCenter={center} onMapLoad={onLoad} tripPlace={tripPlace} setTriPlace={setTripPlace}/>
			</div> 
		</div>
	)
}

export default TripPage
import React from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import './GoogleMapSection.style.css'

const GoogleMapSection = ({ mapCenter, onMapLoad, tripPlace, setTriPlace }) => {
	const containerStyle = {
		width: '100%',
		height: '100vh'
	};

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={mapCenter}
			zoom={15}
			onLoad={(map) => onMapLoad(map)}
			options={{
				zoomControl: false,
				streetViewControl: false,
			}}
		>
			{tripPlace.map((item,index) => {
				let tempItemPosLat = item.geometry.location.lat()
				let tempItemPosLng = item.geometry.location.lng()
				let itemPos = {
					lat: tempItemPosLat,
					lng: tempItemPosLng
				}
				return (
					<MarkerF
						key={index}
						position={itemPos}
					/>
				)
			})}
		</GoogleMap>
	)
}

export default GoogleMapSection
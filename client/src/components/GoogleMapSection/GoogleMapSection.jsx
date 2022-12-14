import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import './GoogleMapSection.style.css'
const GoogleMapSection = ({ mapCenter, onMapLoad }) => {
	const containerStyle = {
		width: '100%',
		height: '100vh'
	};
	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={mapCenter}
			zoom={15}
			options={{
				zoomControl: false,
				streetViewControl: false,
			}}
		>
			{/* empty */}
		</GoogleMap>
	)
}

export default GoogleMapSection
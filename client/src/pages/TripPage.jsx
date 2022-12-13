import React from 'react'
import { useJsApiLoader } from "@react-google-maps/api"
import './TripPage.style.css'
import GoogleMap from '../components/GoogleMapSection/GoogleMapSection'
import NavbarTrip from '../components/TripSection/NavbarTrip'

const library = ['places']
const TripPage = () => {
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const {isLoaded, loadError} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries: library
  })

  return (
    <div className='trippage-maincontainer'>
      <div className='trippage-container-left'>
        <NavbarTrip/>
      </div>
      <div className='trippage-container-right'>
        {isLoaded? <GoogleMap mapCenter={center}/> : loadError}
      </div>
    </div>
  )
}

export default TripPage
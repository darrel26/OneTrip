import React from 'react'
import { LoadScript } from "@react-google-maps/api"
import './TripPage.style.css'
import GoogleMap from '../components/GoogleMapSection/GoogleMapSection'
import NavbarTrip from '../components/TripSection/NavbarTrip'

const TripPage = () => {
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  return (
    <div className='trippage-maincontainer'>
      <LoadScript
       googleMapsApiKey='AIzaSyBuDXGh0iay6VVMlb3X7Odap7W3mS8ZZiE'
      >
        <div className='trippage-container-left'>
          <NavbarTrip/>
        </div>
        <div className='trippage-container-right'>
          <GoogleMap mapCenter={center}/>
        </div>
      </LoadScript>
    </div>
  )
}

export default TripPage
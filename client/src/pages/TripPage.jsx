import React from 'react'
import { useJsApiLoader } from "@react-google-maps/api"
import './TripPage.style.css'
import GoogleMap from '../components/GoogleMapSection/GoogleMapSection'
import NavbarTrip from '../components/TripSection/NavbarTrip'
import EditTrip from '../components/TripSection/EditTrip'

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
      {isLoaded?
        <>
          <div className='trippage-container-left'>
            <NavbarTrip/>
            <EditTrip/>
          </div>
          <div className='trippage-container-right'>
            <GoogleMap mapCenter={center}/>
          </div>
        </>:
        loadError
      }
    </div>
  )
}

export default TripPage
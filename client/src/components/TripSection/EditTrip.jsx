import React, {useState} from 'react'
import chevron from '../../assets/Chevron-icon.svg'
import calendar from '../../assets/Calendar-icon-trip.svg'
import './EditTrip.style.css'
import { placeVisit } from '../../DummyData'
import PlacePreview from './PlacePreview'

const EditTrip = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='edit-trip-container'>
        <h1 id='placeTitle'>{placeVisit.tripName}</h1>
        <div className='date-trip'>
          <img src={calendar} alt="Calendar"/>
          <h3>{`${placeVisit.dateStart} - ${placeVisit.dateEnd}`}</h3>
        </div>
        <div className='accordion'>
            <div className='accordion-title' onClick={() => setIsOpen(!isOpen)}>
              <img className='toggle' src={chevron} alt="chevron icon" aria-expanded={isOpen}/>
              <h1>Places to visit</h1>
            </div>
            <div className='accordion-content' aria-expanded={!isOpen}>
             {placeVisit.trip.map((item, index)=>(
                <PlacePreview key={item.objectId} placeImg={item.image} index={index} placeDesc={item.description} placeName={item.placeName}/>
             ))}
            </div>
        </div>
    </div>
  )
}

export default EditTrip
import React, {useState} from 'react'
import chevron from '../../assets/Chevron-icon.svg'
import calendar from '../../assets/Calendar-icon-trip.svg'
import './EditTrip.style.css'
import { placeVisit } from '../../DummyData'
import PlacePreview from './PlacePreview'
import Budget from './Budget'

const EditTrip = () => {
  // eslint-disable-next-line
  const [dataTrip , setDataTrip] = useState(placeVisit);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBudget, setIsOpenBudget] = useState(true);

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
              <h1 className='title'>Places to visit</h1>
            </div>
            <div className='accordion-content' aria-expanded={!isOpen}>
             {dataTrip.trip.map((item, index)=>(
                <PlacePreview key={item.objectId} placeImg={item.image} index={index} placeDesc={item.description} placeName={item.placeName}/>
             ))}
            </div>
        </div>
        <div className='accordion'>
            <div className='accordion-title-budget'>
              <div className='budget-title' onClick={() => setIsOpenBudget(!isOpenBudget)}>
                <img className='toggle' src={chevron} alt="chevron icon" aria-expanded={isOpenBudget}/>
                <h1 className='title'>Budgetting</h1>
              </div>
              <button>ADD EXPENSES</button>
            </div>
            <div className='accordion-content' aria-expanded={!isOpenBudget}>
              <Budget value={dataTrip.budgetData.targetBudget}/>
            </div>
        </div>
    </div>
  )
}

export default EditTrip
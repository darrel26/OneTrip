import React from 'react'

import Location from '../../assets/gps.svg'
import Plus from '../../assets/plus.svg'
import Calendar from '../../assets/calendar.svg'

import './Content.stye.css'

const Content = () => {
  return (
    <div className='herosection-content'>
        <h1>Planning for your trip, will make the trip even better!</h1>
        <h2>Build and Organize your trip, in a free trip planner web application designed for your vacations. Make your trip and start your journey!</h2>
        <div className='herosection-contenttrip'>
            <div className='content-input'>
                <img src={Location} alt="Location logo"/>
                <input placeholder='City, Destination'/>
            </div>
            <div className='content-input'>
                <img src={Calendar} alt="Location logo"/>
                <input type="date" placeholder='Start date'/>
            </div>
            <div className='content-input'>
                <img src={Calendar} alt="Location logo"/>
                <input type="date" id='no-border' placeholder='End Date'/>
            </div>
            <div className='content-button'>
                <button><img src={Plus} alt="plus icon"/></button>
            </div>
        </div>
    </div>
  )
}

export default Content
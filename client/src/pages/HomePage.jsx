import React from 'react'

import Navbar from '../components/Hero section/Navbar'
import Content from '../components/Hero section/Content'
import AboutUs from '../components/Abous us/AboutUs'

import './HomePage.style.css'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <div className='herosection-container'>
            <Navbar/>
            <Content/>
        </div>
        <div className='aboutus-container-home'>
          <AboutUs/>
        </div>
    </div>
  )
}

export default HomePage
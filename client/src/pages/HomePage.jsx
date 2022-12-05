import React from 'react'

import Navbar from '../components/HeroSection/Navbar'
import Content from '../components/HeroSection/Content'
import AboutUs from '../components/AboutUs/AboutUs'
import CTASection from '../components/CTASection/CTASection'
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
        <div>
          <CTASection/>
        </div>
    </div>
  )
}

export default HomePage
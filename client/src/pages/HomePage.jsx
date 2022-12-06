import React from 'react'

import Navbar from '../components/HeroSection/Navbar'
import Content from '../components/HeroSection/Content'
import AboutUs from '../components/AboutUsSection/AboutUs'
import CTASection from '../components/CTASection/CTASection'
import './HomePage.style.css'
import FeatureSection from '../components/FeatureSection/FeatureSection'


const HomePage = () => {
  return (
    <div className='homepage-container'>
        <div className='herosection-container'>
            <Navbar/>
            <Content/>
        </div>
        <div>
          <FeatureSection/>
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
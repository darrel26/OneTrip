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
        <div id='heroSectionID' className='herosection-container'>
            <Navbar heroSectionId="heroSectionID" featureSectionid="featureSectionID" aboutUsid="aboutUsID"/>
            <Content/>
        </div>
        <div id='featureSectionID'>
          <FeatureSection/>
        </div>
        <div id='aboutUsID' className='aboutus-container-home'>
          <AboutUs/>
        </div>
        <div>
          <CTASection/>
        </div>
        
    </div>
  )
}

export default HomePage
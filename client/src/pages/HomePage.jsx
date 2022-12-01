import React from 'react'

import Navbar from '../components/Hero section/Navbar'
import Content from '../components/Hero section/Content'

import './HomePage.style.css'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <div className='herosection-container'>
            <Navbar/>
            <Content/>
        </div>
    </div>
  )
}

export default HomePage
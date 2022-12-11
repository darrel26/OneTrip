import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import { useJsApiLoader } from "@react-google-maps/api"
import HomePage from './pages/HomePage'
import './App.css'
import TripPage from './pages/TripPage'

const library = ['places']
const App = () => {
    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
        libraries: library
    })

    return (
    <>
      {isLoaded? 
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/trip" element={<TripPage/>} />
              </Routes>
          </Router>:
          loadError
      }
    </>
    )
}

export default App;
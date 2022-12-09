import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import './App.css'
import TripPage from './pages/TripPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/trip" element={<TripPage/>} />
      </Routes>
    </Router>
  )
}

export default App;

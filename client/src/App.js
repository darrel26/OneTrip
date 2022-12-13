import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'

<<<<<<< HEAD
function App() {
    return (
        <HomePage />
    );
=======
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
>>>>>>> fb2dc1323298452b93c5340e4d877e0a9059fe5e
}

export default App;
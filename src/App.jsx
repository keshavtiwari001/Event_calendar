import React,{ useState } from 'react'
import './App.css'
import FinalCalendar from './pages/FinalCalendar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<FinalCalendar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

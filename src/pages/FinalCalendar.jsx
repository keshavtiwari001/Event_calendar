import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Calendar from '../components/Calendar/Calendar'
import Events from '../components/Events/Events'

const FinalCalendar = () => {
  return (
    <div className='flex items-center'>
        <Calendar />
        <Events />
    </div>
  )
}

export default FinalCalendar
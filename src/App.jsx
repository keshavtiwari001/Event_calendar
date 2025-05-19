import { useState } from 'react'
import './App.css'
import FinalCalendar from './pages/FinalCalendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FinalCalendar />
    </>
  )
}

export default App

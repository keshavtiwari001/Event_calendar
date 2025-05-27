import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEvent, setEventName, setSelectedDate } from '../../app/features/calendarSlice'
import "../Calendar/style.css"

const Events = () => {
  const dispatch = useDispatch();
  const { selectedDate, events, eventName } = useSelector((state) => state.calendar)

  const displayDate = selectedDate ? new Date(selectedDate) : null;

  const handleEventNameChange = (e) => {
    dispatch(setEventName(e.target.value))
  }

  const create_event_fun = ( ) => {
    if(selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate,
        title: eventName,
      }

      dispatch(addEvent(newEvent));
      dispatch(setEventName(""));
      dispatch(setSelectedDate(null));
      dispatch(setSelectedDate(newEvent.date));
    }
  }

  return (
    <div className='event-container'>
      {selectedDate && (
        <div className="event-details">
          <h1>create Event</h1>

          <h2>Selected Date:</h2>
          <p>{displayDate.toDateString()}</p>
          <input
            type="text"
            placeholder="Event Name" 
            value={eventName}
            onChange={handleEventNameChange}
            />
            <button className='create-btn' onClick={create_event_fun}>
              Click here to Add Event
            </button>
        </div>
      )}
    </div>
  )
}

export default Events   
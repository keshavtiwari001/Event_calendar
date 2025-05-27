import React, { useState } from "react";
import Calendarr from "react-calendar";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../app/features/calendarSlice";

const Calendar = () => {
    // const [selectedDate, setSelectedDate] = useState(null);
    // const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState("");
    const dispatch = useDispatch();
    const { selectedDate, events } = useSelector((state) => state.calendar);

    const selectedDateobj = selectedDate ? new Date(selectedDate) : null;

    const Date_Click = (date) => {
        // setSelectedDate(date);
        dispatch(setSelectedDate(date.toISOString()));
    }
    return (
        <div className="app">
            {/* <h1>Keshav's Calendar Application</h1> */}
            <div className="container">
                <div className="calender-container">
                    <Calendarr
                        value={selectedDate}
                        onClickDay={Date_Click}
                         titleClassName={({ date }) =>
                            selectedDate && date.toDateString() === selectedDate.toDateString()
                                ? 'selected'
                                : events.some((event) => event.date.toDateString() === date.toDateString()
                                ) ? 'event-marked' : ""
                        }
                    />{" "}
                </div>
            </div>
        </div>
    )
}

export default Calendar
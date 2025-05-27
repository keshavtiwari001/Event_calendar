import { createSlice } from "@reduxjs/toolkit";

const CalendarSlice = createSlice({
    name: 'calendar',
    initialState:{
        selectedDate: null,
        events: [],
        eventName: "",
    },
    reducers: {
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        addEvent: (state, action) =>{
            state.events = [...state.events, action.payload];
        },
        updateEvent: (state, action) => {
            const { id, newName} = action.payload;
            const event = state.events.find((event) => event.id === id);
            if(event){
                event.title = newName;
            }
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter(event => event.id !== action.payload);
        },
        setEventName: (state, action) => {
            state.eventName = action.payload;
        }
    }
})

export const { setSelectedDate, addEvent, updateEvent, deleteEvent, setEventName} = CalendarSlice.actions;
export default CalendarSlice.reducer;
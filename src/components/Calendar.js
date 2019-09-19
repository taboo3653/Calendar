import React, { useState,useEffect } from 'react';
import DaysContainer from './DaysContainer.js';
import MonthSelect from './MonthSelect.js';
import Search from './Search.js';
import { SelectedMonthContext } from '../context/SelectedMonthContext';
import { EventsContext } from '../context/EventsContext';
import { EventFormStateContext } from '../context/EventFormStateContext';

import EventForm from './EventForm/EventForm';


function Calendar(props) {

  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const [events, setEvents] = useState([]);


  const deleteEvent = (event) => {
    setEvents(events.filter((item) => (item !== event)));
  }

  const addEvent = ({ date, name, participants = "", description = "" }) => {

    setEvents([...events, {
      id: +events.length + 1,
      date, name, participants, description
    }
    ]);
  }

  const updateEvent = ({ id, date, name, participants, description }) => {
    const elem = events.find((item) => (item.id === id));
    elem.date = date;
    elem.name = name;
    elem.participants = participants;
    elem.description = description;

    setEvents(events);
  }


  const [eventFormState, setEventFormState] = useState({
    target: null,
  });

  const showEventForm = (info, date, isEdit = false) => {

    setEventFormState({
      ...eventFormState,
      target: {
        info: info,
        date: date,
        isEdit: (isEdit || info === undefined),
      }
    });
  }

  const hideEventForm = () => {
    setEventFormState({
      ...eventFormState,
      target: null,
    });
  }

  useEffect (() =>{
    const events = JSON.parse(localStorage.getItem('events') , (key, value)=>{
      if(key === "date")
        return new Date(value);

      return value;
    }) || [];

    setEvents(events);
  },[]);

  
  useEffect (() =>{
    localStorage.setItem('events',JSON.stringify(events));
  },[events]);

  return (

    <EventsContext.Provider value={{
      events, setEvents,
      deleteEvent, addEvent, updateEvent
    }}>
      <EventFormStateContext.Provider value={{
        eventFormState,
        hideEventForm, showEventForm
      }}>
        <SelectedMonthContext.Provider value={{
          selectedMonth, setSelectedMonth
        }}>
          <div className="calendar">
            <div className="header">
              <MonthSelect />
              <Search />
            </div>
            <DaysContainer />
            {(eventFormState.target) ?
              <EventForm
                eventFormState={eventFormState}
              /> :
              ""
            }
          </div>
        </SelectedMonthContext.Provider>
      </EventFormStateContext.Provider>
    </EventsContext.Provider>

  );
}

export default Calendar;

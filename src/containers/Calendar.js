import React from 'react';
import DaysContainer from './DaysContainer';
import MonthSelect from './MonthSelect';
import EventForm from './EventForm/EventForm';
import Search from './Search';
import { connect } from 'react-redux';


const Calendar = ({eventForm}) => {

  return (
    <div className="calendar">
      <div className="header">
        <MonthSelect />
        <Search />
      </div>
      <DaysContainer />
      {
        
        (eventForm.target) ?
          <EventForm /> :
          ""
      }
    </div>
  );
}

export default connect(
  ({ eventForm }) =>({
    eventForm: eventForm
  })
)(Calendar);

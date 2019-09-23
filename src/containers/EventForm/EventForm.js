import React from 'react';
import { Icon } from 'antd';

import EventFormRead from './EventFormRead';
import EventFormCreate from './EventFormCreate';

import { connect } from 'react-redux'
import { hideEventForm } from '../../redux/actions/eventForm'

function EventForm({ eventForm, hideEventForm }) {
   
    const target = eventForm.target;
  

    return (
        <div className="modal"
            onClick={(e) => {
                if (e.currentTarget === e.target)
                    hideEventForm();
            }}>
            <div className="event-form">
                {<Icon
                    type="close"
                    className="event-form_close-button"
                    onClick={hideEventForm} />}

                {(target.isEdit) ?
                     <EventFormCreate info={target.info} date = {target.date}  /> :
                     <EventFormRead info={target.info}  />
                    }

            </div>
        </div>);
}


export default connect(
    (store) =>({
        eventForm : store.eventForm
    })
    ,{ hideEventForm })(EventForm);
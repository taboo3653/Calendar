import React from 'react';
import { Typography, Button } from 'antd';
import { MonthNames } from '../../utils'
import { connect } from 'react-redux'
import { deleteEvent } from "../../redux/actions/events"
import { hideEventForm, showEventForm } from "../../redux/actions/eventForm"


const EventFormRead = ({ info, deleteEvent, showEventForm, hideEventForm }) => {
    const { Title, Text } = Typography;


    return (<div className="event-form_read">
        <Title level={4}>{info.name}</Title>
        <Text className="event-form_read_date">{`${info.date.getDate()} ${MonthNames[info.date.getMonth()]}`}</Text>
        <div className="event-form_read_participants">
            <Text type="secondary" className="event-form_read_participants_title">Participants:</Text>
            <Text>{info.participants}</Text>
        </div>
        <Text className="event-form_read_description">
            <Text className="event-form_read_description_title">Description:</Text>
            <Text>{info.description}</Text>
        </Text>

        <div className="event-form_buttons" >
            <Button size="small"
                onClick={() => {
                    showEventForm(info, info.date, true);
                }}
            >Edit</Button>
            <Button size="small"
                onClick={() => {                    
                    deleteEvent(info);
                    hideEventForm();
                }}>Delete</Button>
        </div>
    </div>);
}

export default connect(null, {deleteEvent, showEventForm, hideEventForm})(EventFormRead);
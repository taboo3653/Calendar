import React, { useContext } from 'react';
import { Typography, Button } from 'antd';
import { MonthNames } from '../../utils'
import { EventsContext } from '../../context/EventsContext';
import { EventFormStateContext } from '../../context/EventFormStateContext';

const EventFormRead = ({ info }) => {
    const { Title, Text } = Typography;
    const { deleteEvent } = useContext(EventsContext);
    const { showEventForm, hideEventForm } = useContext(EventFormStateContext);


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

export default EventFormRead;
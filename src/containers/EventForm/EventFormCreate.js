import React, { useState } from 'react';
import { connect } from "react-redux";
import { addEvent, updateEvent } from "../../redux/actions/events"
import { hideEventForm } from "../../redux/actions/eventForm"

import { Input, Button } from 'antd';

const EventFormCreate = ({ info = {}, date, addEvent, updateEvent, hideEventForm }) => {

    const { TextArea } = Input;


    const { id = 0, name: defaultName = "", participants: defaultParticipants = "", description: defaultDescription = "" } = info;


    const [name, setName] = useState(defaultName);
    const [participants, setParticipants] = useState(defaultParticipants);
    const [description, setDescription] = useState(defaultDescription);



    const handleSave = () => {
        (id) ?
            updateEvent(id, date, name, participants, description) :
            addEvent(date, name, participants, description)

        hideEventForm();
    }


    return (<div className="event-form_create">

        <div className="event-form_create_inputs">
            <Input
                placeholder="Event name"
                value={name}
                onChange={(e) => (setName(e.target.value))}
            />
            <Input
                placeholder="Names of participants"
                value={participants}
                onChange={(e) => (setParticipants(e.target.value))}
            />
        </div>
        <TextArea rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) => (setDescription(e.target.value))} />
        <div className="event-form_buttons" >
            <Button onClick={handleSave} type="primary" size="small">Save</Button>
        </div>

    </div>);
}



export default connect(null, { addEvent, updateEvent, hideEventForm })(EventFormCreate);
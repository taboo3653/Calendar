import React, { useState, useContext } from 'react';
import { EventsContext } from "../../context/EventsContext"
import { EventFormStateContext } from "../../context/EventFormStateContext"

import { Input, Button} from 'antd';

const EventFormCreate = ({ info = {}, date }) => {

    const { TextArea } = Input;

    const eventsContext = useContext(EventsContext);
    const { hideEventForm } = useContext(EventFormStateContext);

    const { id = 0, name: defaultName = "", participants: defaultParticipants = "", description: defaultDescription = "" } = info;


    const [name, setName] = useState(defaultName);
    const [participants, setParticipants] = useState(defaultParticipants);
    const [description, setDescription] = useState(defaultDescription);



    const handleSave = () => {
        id ?
            eventsContext.updateEvent({
                id, date, name, participants, description
            }) :
            eventsContext.addEvent({
                date, name, participants, description
            });

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

export default EventFormCreate;
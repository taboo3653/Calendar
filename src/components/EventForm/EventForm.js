import React, { useContext } from 'react';
import { Icon } from 'antd';

//import SelectedDateContext from '../../context/SelectedDateContext';
import EventFormRead from './EventFormRead';
import EventFormCreate from './EventFormCreate';

import { EventFormStateContext } from '../../context/EventFormStateContext';


function EventForm({ eventFormState }) {
    /*
        const getPosition = () => {
            const position = {};
            if (target) {
    
                const containerCoords = getAbsoluteCoords(document.getElementById("DayFieldsContainer"));
                const eventFormCoords = {
                    width: eventFormRef.current.clientWidth,
                    height: eventFormRef.current.clientHeight
                };
                const targetCoords = getAbsoluteCoords(target.domElement);
                const margin = 10;
    
                if (+targetCoords.right + +eventFormCoords.width < containerCoords.right)
                    position.left = targetCoords.right + margin;
                else
                    position.left = targetCoords.left - eventFormCoords.width - margin;
    
                if (+targetCoords.top + +eventFormCoords.height < containerCoords.bottom)
                    position.top = targetCoords.top - margin;
                else
                    position.top = containerCoords.bottom - eventFormCoords.height + margin;
            }
    
            return position;
        }
    */
    const { hideEventForm } = useContext(EventFormStateContext);

    /*
    const cls = ["event-form"];
    if (!eventFormState.target)
        cls.push("hidden");*/

    const target = eventFormState.target;
    /*
        const eventFormRef = useRef(null);
        useEffect(()=>{
            setFormPosition(getPosition());
        },[target])*/

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


export default EventForm;
import React, { useContext } from 'react';
import DayField from './DayField';
import { getCountDaysInMonts } from '../utils';
import { EventsContext } from '../context/EventsContext';
import { SelectedMonthContext } from '../context/SelectedMonthContext';
import { EventFormStateContext } from '../context/EventFormStateContext';


const DayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


export default function DaysContainer() {

    const { selectedMonth } = useContext(SelectedMonthContext);
    const { events } = useContext(EventsContext);
    const { showEventForm } = useContext(EventFormStateContext);
    
    const fields = createFields(selectedMonth);

    return (
        <>
            <div
                className="day-fields-container">
                {
                    fields.map((item, index) => {
                        return <DayField
                            key={index}
                            
                            type={item.type}
                            onClick={event => { showEventForm(/*event.currentTarget,*/ item.fieldData, item.date) }}
                            dayVal={item.dayVal}
                            fieldData={item.fieldData}
                        />
                    })
                }
            </div>
         
        </>
    );

    function createFields(selectedMonth) {


        const addPrevMonthFields = () => {
            let tempDate = new Date(selectedMonth);

            tempDate.setDate(0); //ставим на последнее число предыдущего месяца
            let dayOfWeek = tempDate.getDay() === 0 ? 7 : tempDate.getDay();
            tempDate.setDate(tempDate.getDate() - dayOfWeek + 1); // ставим на понедельник

            for (let i = 1; i <= dayOfWeek; i++) {
                dayFields.push(createDayFieldCompomnent(tempDate, "DayFieldOtherMonth", dayFields.length + 1));
                tempDate.setDate(tempDate.getDate() + 1);
            }

        }

        const addCurrentMonthFields = () => {
            let tempDate = new Date(selectedMonth);

            tempDate.setDate(1);

            let countDaysInCurrentMonth = getCountDaysInMonts(2019, tempDate.getMonth());

            for (let i = 1; i <= countDaysInCurrentMonth; i++) {
                dayFields.push(createDayFieldCompomnent(tempDate, "DayFieldCurrentMonth", dayFields.length + 1));
                tempDate.setDate(tempDate.getDate() + 1);
            }
        }

        const addNextMonthFields = () => {
            let tempDate = new Date(selectedMonth);
            tempDate.setMonth(tempDate.getMonth() + 1);
            tempDate.setDate(1);

            while (dayFields.length < 42) {
                dayFields.push(createDayFieldCompomnent(tempDate, "DayFieldOtherMonth", dayFields.length + 1));
                tempDate.setDate(tempDate.getDate() + 1);
            }
        }

        const createDayFieldCompomnent = (date, type, key) => {
            let dayVal;

            key <= 7 ?
                (dayVal = DayNames[dayFields.length] + ", " + date.getDate()) :
                dayVal = date.getDate();

            const fieldData = events.find((item) => (
                item.date.getFullYear() === date.getFullYear() &&
                item.date.getMonth() === date.getMonth() &&
                item.date.getDate() === date.getDate()
            ));

            const currentDate = new Date(date);

            return {
                date: currentDate, dayVal, type, fieldData
            };
        }

        let dayFields = [];

        addPrevMonthFields();
        addCurrentMonthFields();
        addNextMonthFields();

        return dayFields;


    };
}






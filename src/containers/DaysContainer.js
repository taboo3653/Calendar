import React from 'react';
import DayField from '../components/DayField';
import { getCountDaysInMonts } from '../utils';
import { showEventForm } from "../redux/actions/eventForm"

import { connect } from 'react-redux';

const DayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const DaysContainer = ({events, selectedMonth, showEventForm}) => {

    
    const fields = createFields(selectedMonth);

    return (
        <>
            <div className="day-fields-container">
                {
                    fields.map((item, index) => {
                        return <DayField
                            key={index}
                            
                            type={item.type}
                            onClick={() => { showEventForm(item.fieldData, item.date) }}
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

export default connect(
    ({events, selectedMonth}) => ({
        events: events,
        selectedMonth: selectedMonth
    }), {showEventForm}
)(DaysContainer);




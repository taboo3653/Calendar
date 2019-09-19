import React, { useContext } from 'react';
import {Button, Typography} from 'antd';
import { SelectedMonthContext } from '../context/SelectedMonthContext'
import { MonthNames } from "../utils";

function MonthSelect(props) {

    const {Text} = Typography; 

    const { selectedMonth, setSelectedMonth } = useContext(SelectedMonthContext);
    let currentMonthName = MonthNames[selectedMonth.getMonth()];
    let currentYear = selectedMonth.getFullYear();


    const minusMonthHandler = () => {
        selectedMonth.setMonth(selectedMonth.getMonth() - 1);
        setSelectedMonth(new Date(selectedMonth));
    }

    const plusMonthHandler = () => {
        selectedMonth.setMonth(selectedMonth.getMonth() + 1);
        setSelectedMonth(new Date(selectedMonth));
    }

    return <div className="month-changer">
        <Button  icon="caret-left" size = "small" onClick={minusMonthHandler} />
        <Text strong className="month-changer_title">{currentMonthName + ", " + currentYear}</Text>
        <Button  icon="caret-right" size = "small" onClick={plusMonthHandler} />
    </div>;
}

export default MonthSelect;

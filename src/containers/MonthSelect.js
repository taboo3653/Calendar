import React from 'react';
import {Button, Typography} from 'antd';
import { MonthNames } from "../utils";
import { connect } from 'react-redux'
import { plusMonth, minusMonth } from '../redux/actions/selectedMonth'

const MonthSelect = ({plusMonth,minusMonth, selectedMonth}) => {

    const {Text} = Typography; 

    let currentMonthName = MonthNames[selectedMonth.getMonth()];
    let currentYear = selectedMonth.getFullYear();


    return <div className="month-changer">
        <Button  icon="caret-left" size = "small" onClick={minusMonth} />
        <Text strong className="month-changer_title">{currentMonthName + ", " + currentYear}</Text>
        <Button  icon="caret-right" size = "small" onClick={plusMonth} />
    </div>;
}

export default connect((store) => ({
    selectedMonth: store.selectedMonth
}),{plusMonth,minusMonth})(MonthSelect);

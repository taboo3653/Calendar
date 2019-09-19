import React from 'react';
import { Typography } from 'antd';

const DayField = ({ type, onClick, dayVal, fieldData }) => {

    const {Text} = Typography;

    return (<div
        className={"DayField " + type}
        onClick={onClick}>
        <Text className="day-field_text">{dayVal}</Text><br />
        {fieldData
            ? <>
                <Text  strong className="day-field_text">{fieldData.name}</Text><br />
                <Text className="day-field_text">{fieldData.participants}</Text>
            </>
            : ""}
    </div>);
}

export default DayField;

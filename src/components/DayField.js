import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const DayField = ({ type, onClick, dayVal, fieldData }) => {

    const {Text} = Typography;

    return (<div
        className={"day-field " + type}
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

DayField.propTypes = {
        type: PropTypes.string,
        onClick: PropTypes.func,
        dayVal: PropTypes.node,
        fieldData: PropTypes.shape ({
            name: PropTypes.node,
            participants: PropTypes.node
        })
}

export default DayField;

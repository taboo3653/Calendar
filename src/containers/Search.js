import React, { useState, useRef, useEffect } from 'react';
import { Input, Typography } from 'antd';
import { MonthNames } from '../utils'
import { connect } from 'react-redux'
import { showEventForm } from "../redux/actions/eventForm"


function Search({events, showEventForm}) {

    const { Text } = Typography;
    const { Search } = Input;
    const searchRef = useRef(null);

    const [searchValue, setSearchValue] = useState("");

    const [searchItemsPos, setSearchItemsPos] = useState({
        top: 0,
        left: 0
    });



    useEffect(() => {
        setSearchItemsPos({
            top: searchRef.current.offsetTop + searchRef.current.clientHeight + 10,
            left: searchRef.current.offsetLeft,
            width: searchRef.current.clientWidth
        });

        //searchRef.current.querySelector("input").addEventListener('blur', (e) => { setSearchValue("") });
        // eslint-disable-next-line
    }, [])



    const items = events.filter((item) => (
        searchValue !== "" &&
        (item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.participants.toLowerCase().includes(searchValue.toLowerCase()) ||
            (item.date.getDate() + " " + MonthNames[item.date.getMonth()]).toLowerCase().includes(searchValue.toLowerCase()))
    ));

    items.sort((a, b) => (a.date - b.date));


    return (<div className="search" ref={searchRef}>
        <Search
            placeholder="Event, date or participants"
            style={{ width: 220 }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.toString())}
        />
        {(items.length > 0 &&
            searchRef.current !== null &&
            searchRef.current.querySelector("input:focus")) ?
            <div
                className="search_items"
                style={searchItemsPos}
            >
                {items.map((item, index) => (
                    <div
                        className="search_items_item"
                        key={index}
                        onClick={event => { 
                            showEventForm(item, item.date); 
                            setSearchValue("");
                        }}
                        >
                        <Text strong>{item.name}</Text>
                        <Text>{`${item.date.getDate()} ${MonthNames[item.date.getMonth()]}`}</Text>
                    </div>)
                )}
            </div> :
            ""
        }

    </div>);
}

export default connect(
    ({events}) => ({
        events: events
    }),{showEventForm}
    )(Search);

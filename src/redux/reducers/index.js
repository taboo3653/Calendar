import {combineReducers} from 'redux';
import events from './events';
import eventForm from './eventForm';
import selectedMonth from './selectedMonth';


export default combineReducers ( {
    events, eventForm, selectedMonth
});

import { PLUS_MONTH, MINUS_MONTH } from '../actions/selectedMonth'

const initialState = new Date();


export default (state = initialState, action) => {

    switch (action.type) {
     
        case PLUS_MONTH: return new Date(state.setMonth(state.getMonth() + 1));
        case MINUS_MONTH: return  new Date(state.setMonth(state.getMonth() - 1));
        default: return state;
    }
}
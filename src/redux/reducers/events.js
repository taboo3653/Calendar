import { ADD, UPDATE, DELETE } from '../actions/events'

const initialState = JSON.parse(localStorage.getItem('events'), (key, value) => {
    if (key === "date")
        return new Date(value);

    return value;
}) || [];


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            return [...state, { id: state.length + 1, ...action.payload }];

        case UPDATE:
            return state.map((item) => {
                console.log(action.payload.id)
                return (item.id === action.payload.id) ?
                    action.payload :
                    item;
            });


        case DELETE:
            return state.filter((item) => (item.id !== action.payload.id));

        default: return state;
    }
}
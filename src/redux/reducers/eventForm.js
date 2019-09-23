import { SHOW,HIDE } from '../actions/eventForm'

const initialState = {
    target: null
};


export default (state = initialState, action) => {

    switch (action.type) {
     
        case SHOW: return {...state, target: action.payload};
        case HIDE: return {...state, target: null};

       
        default: return state;
    }
}
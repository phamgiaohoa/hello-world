import {GET_ORDERED} from './../type/action_type';

const initState = [];

const orderedReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_ORDERED : 
            return action.payload;
        default : 
            return state
    }
}

export default orderedReducer;
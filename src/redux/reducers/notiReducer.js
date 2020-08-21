import {GET_NOTIFICATION} from './../type/action_type';

const initState = [];

const notiReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION : 
            return action.payload;
        default : 
            return state
    }
}

export default notiReducer;
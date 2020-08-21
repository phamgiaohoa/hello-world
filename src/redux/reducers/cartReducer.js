import {ADD_ITEM_TO_CART, DELETE_ITEM_TO_CART, RESET_CART, ADD_CART_FROM_LOCAL, DELETE_ONE_ITEM_TO_CART} from './../type/action_type';

const initState = {
    cart : []
};

const cartReducer = (state = initState,action) => {
    switch(action.type) {
        case ADD_CART_FROM_LOCAL : 
            return {
                cart : action.payload
            }
        case ADD_ITEM_TO_CART : 
            return {
                cart : action.payload
            }
        case DELETE_ITEM_TO_CART : 
            return {
                cart : action.payload
            }
        case DELETE_ONE_ITEM_TO_CART : 
            return {
                cart : action.payload
            }
        case RESET_CART :
            return {
                cart : []
            }
        default : return state;
    }
}


export default cartReducer;
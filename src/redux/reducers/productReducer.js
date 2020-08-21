import {GET_PRODUCT_NEW, GET_PRODUCT_HOT_SELLING, GET_CATEGORY} from './../type/action_type';

const initState = {
   listProductNew : [],
   listProductHotSelling : [],
   listCategory : []
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        case GET_PRODUCT_NEW:
            return {
                ...state,
                listProductNew : action.payload
            }
        case GET_PRODUCT_HOT_SELLING:
            return {
                ...state,
                listProductHotSelling : action.payload
            }
        case GET_CATEGORY:
            return {
                ...state,
                listCategory : action.payload
            }
        default:
            return state
    }
}

export default productReducer;

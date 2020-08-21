import {GET_PRODUCT_NEW, GET_PRODUCT_HOT_SELLING, GET_CATEGORY} from './../type/action_type';
import FetchProduct  from './../../api/Product/FetchProduct';

const FetchGetNewProduct = (data) => {
    return {
        type : GET_PRODUCT_NEW,
        payload : data
    }
}

const FetchGetHotSellingProduct = (data) => {
    return {
        type : GET_PRODUCT_HOT_SELLING,
        payload : data
    }
}

const FetchGetCategory = (data) => {
    return {
        type : GET_CATEGORY,
        payload : data
    }
}

export const getProductNewAction = () => {
    return (dispatch) => {
         FetchProduct.getProductNew().then((res) => {
            
            dispatch(FetchGetNewProduct(res.data))
        })
    }
}

export const getProductHotSellingAction = () => {
    return (dispatch) => {
         FetchProduct.getProductHotSelling().then((res) => {
            
            dispatch(FetchGetHotSellingProduct(res.data))
        })
    }
}

export const getCategoryAction = () => {
    return (dispatch) => {
         FetchProduct.getCategory().then((res) => {
            
            dispatch(FetchGetCategory(res.data))
        })
    }
}

import { GET_ORDERED } from './../type/action_type';
import FetchPayment  from './../../api/Payment/FetchPayment';

const FetchGetOrdered= (data) => {
    return {
        type : GET_ORDERED,
        payload : data
    }
}

export const getOrderedByIdUser = (idUser) => {
    
    return (dispatch) => {
        FetchPayment.getInvoiceByUser(idUser).then((data) => {
            if(data) {
                console.log(data);

                dispatch(FetchGetOrdered(data))
            }
        })
    }
}
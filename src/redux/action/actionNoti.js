import { GET_NOTIFICATION } from './../type/action_type';
import FetchNotification  from './../../api/FetchNotification';

const FetchGetAllNotification= (data) => {
    return {
        type : GET_NOTIFICATION,
        payload : data
    }
}

export const getAllNotification = () => {
    return (dispatch) => {
        FetchNotification.getAllNotification().then((data) => {
            if(data) {
                dispatch(FetchGetAllNotification(data))
            }
        })
    }
}
import {IS_VISIBLE_SPINNER, IS_NOT_VISIBLE_SPINNER} from '../type/action_typelog';

const isVisibleTrue = (userInfo) => {
    return {
        type : IS_VISIBLE_SPINNER,
    }
}

const isVisibleFalse = () => {
    return {
        type : IS_NOT_VISIBLE_SPINNER,
    }
}


export {
    isVisibleTrue,
    isVisibleFalse
}
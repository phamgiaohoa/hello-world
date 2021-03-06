import {GET_USER} from './../../type/action_type';

const currentUser = (state = [], action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default currentUser;

import {GET_USER} from '../type/action_type';

export const getUserAction = (user) => {
  return {
    type: GET_USER,
    user,
  };
};

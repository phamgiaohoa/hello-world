import {combineReducers} from 'redux';
import currentUser from './authReducer';

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;

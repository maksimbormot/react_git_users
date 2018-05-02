import {combineReducers} from 'redux';
import users from './users';
import userInfo from './userInfo';
import globalNotify from './globalNotify';

const rootReducer = combineReducers({
  users,
  userInfo,
  globalNotify
});

export default rootReducer;

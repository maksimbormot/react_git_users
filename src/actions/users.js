import {
  USERS_RECEIVED,
  USERS_REQUEST,
  USERS_CLEAR,
  USERS_ERROR
} from '../constants';

import {searchUsersByName} from '../api';
import {viewApiErrorToNotify} from './globalNotify';

export const usersRequest = () => ({
  type: USERS_REQUEST
});

export const usersReceive = (data) => ({
  type: USERS_RECEIVED,
  users: data
});

export const usersError = () => ({
  type: USERS_ERROR,
});

export const usersClear = () => ({
  type: USERS_CLEAR,
});

export const getAllUsers = name => dispatch => {
  dispatch(usersRequest());
  searchUsersByName(name)
    .then(data => {
      dispatch(usersReceive(data.data.items));
    })
    .catch(error => {
      dispatch(usersError());
      dispatch(viewApiErrorToNotify(error));
    })
};


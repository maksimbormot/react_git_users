import {
  USER_INFO_RECEIVED,
  USER_INFO_REQUEST,
  USER_INFO_ERROR
} from '../constants';

import {getUserInfo, getUserRepos} from '../api';
import {viewApiErrorToNotify} from './globalNotify';

export const userInfoRequest = () => ({
  type: USER_INFO_REQUEST
});

export const userInfoReceive = (info, repos) => ({
  type: USER_INFO_RECEIVED,
  user: info,
  repos:repos
});

export const userInfoError = () => ({
  type: USER_INFO_ERROR
});


export const getUserData = name => dispatch => {
  dispatch(userInfoRequest());
  let promisesRequest = [
    getUserInfo(name),
    getUserRepos(name)
  ];
  Promise.all(promisesRequest)
    .then(answer => {
     dispatch(userInfoReceive(answer[0].data, answer[1].data));
    })
    .catch(error => {
      dispatch(userInfoError());
      dispatch(viewApiErrorToNotify(error));
    })
};


import {
  USER_INFO_REQUEST,
  USER_INFO_RECEIVED,
  USER_INFO_ERROR
} from '../constants';

const initialState = {
  loading: false,
  user: {},
  repos:[],
  error: false
};

export default function userInfo(state = initialState, action) {

  switch (action.type) {

    case USER_INFO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }

    case USER_INFO_RECEIVED: {
      return {
        ...state,
        user: action.user,
        repos: action.repos,
        loading: false,
        error: false
      }
    }

    case USER_INFO_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }

    default: {
      return state
    }
  }
}
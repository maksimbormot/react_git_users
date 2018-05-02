import {
  USERS_RECEIVED,
  USERS_REQUEST,
  USERS_CLEAR,
  USERS_ERROR
} from '../constants';

const initialState = {
  loading: false,
  users: []
};

export default function users(state = initialState, action) {

  switch (action.type) {

    case USERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case USERS_RECEIVED: {
      return {
        ...state,
        users: action.users,
        loading: false
      }
    }

    case USERS_CLEAR: {
      return {
        ...state,
        users: [],
        loading: false
      }
    }

    case USERS_ERROR: {
      return {
        ...state,
        users: [],
        loading: false
      }
    }

    default: {
      return state
    }
  }
}
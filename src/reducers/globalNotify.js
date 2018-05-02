import {
  NEW_GLOBAL_NOTIFY,
  RESET_GLOBAL_NOTIFY
} from '../constants';

const initialState = {
  notify: false,
};

export default function globalNotify(state = initialState, action) {
  switch (action.type) {

    case NEW_GLOBAL_NOTIFY: {
      return {
        ...state,
        notify: action.data
      }
    }

    case RESET_GLOBAL_NOTIFY: {
      return {
        ...state,
        notify: false,
      }
    }

    default: {
      return state
    }

  }
}
import {
  NEW_GLOBAL_NOTIFY,
  RESET_GLOBAL_NOTIFY
} from '../constants';

export const newGlobalNotify = data => ({
  type: NEW_GLOBAL_NOTIFY,
  data: data
});

export const resetGlobalNotify = () => ({
  type: RESET_GLOBAL_NOTIFY
});

export const viewApiErrorToNotify = err => dispatch => {
    dispatch(newGlobalNotify({type: 'error', text: 'Something went wrong. Please try again.'}));
};


import { SHOW_ALERT, HIDE_ALERT } from '../types';

export const showAlertAction = (alert) => {
  return (dispatch) => {
    dispatch(showAlert(alert));
  };
};

const showAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

export const hideAlertAction = (alert) => {
  return (dispatch) => {
    dispatch(hideAlert(alert));
  };
};

const hideAlert = () => ({
  type: HIDE_ALERT,
});

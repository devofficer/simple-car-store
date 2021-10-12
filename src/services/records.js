import { createAction } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';
import * as API from 'services/records';

export const setRecords = createAction(ActionTypes.SET_RECORDS, payload => payload);

export const readRecords = () => (dispatch) => {
  API.readRecords().then(data => dispatch(setRecords(data)));
};

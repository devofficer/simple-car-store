import { createAction } from 'redux-actions';
import { setError } from './auxiliary';
import * as ActionTypes from 'utils/action-types';
import * as API from 'services/records';

export const setRecords = createAction(ActionTypes.SET_RECORDS, payload => payload);
export const addRecord = createAction(ActionTypes.ADD_RECORD, payload => payload);
export const removeRecord = createAction(ActionTypes.REMOVE_RECORD, payload => payload);
export const setRecord = createAction(ActionTypes.SET_RECORD, payload => payload);

export const createRecord = (params) => (dispatch) => {
  API.createRecord(params)
    .then(res => dispatch(addRecord(res.data)))
    .catch(err => dispatch(setError(err.response.data.error)));
};

export const readRecords = () => (dispatch) => {
  API.readRecords()
    .then(res => dispatch(setRecords(res.data)))
    .catch(err => dispatch(setError(err.response.data.error)));
};

export const deleteRecord = (recordId) => (dispatch) => {
  API.deleteRecord(recordId)
    .then(() => dispatch(removeRecord(recordId)))
    .catch(err => dispatch(setError(err.response.data.error)));
};

export const updateRecord = (params) => (dispatch) => {
  API.updateRecord(params)
    .then(res => dispatch(updateRecord(res.data)))
    .catch(err => dispatch(setError(err.response.data.error)));
};


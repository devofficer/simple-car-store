import { createAction } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';

export const setError = createAction(ActionTypes.SET_ERROR, payload => payload);
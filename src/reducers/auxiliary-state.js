import { handleActions } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';
import * as auxiliaryStateUpdaters from './auxiliary-state-updaters';

const actionHandler = {
  [ActionTypes.SET_ERROR]: auxiliaryStateUpdaters.setErrorUpdater,
};

export default handleActions(actionHandler, auxiliaryStateUpdaters.INITIAL_ERROR_STATE);

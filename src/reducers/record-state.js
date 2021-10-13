import { handleActions } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';
import * as recordStateUpdaters from './record-state-updaters';

const actionHandler = {
  [ActionTypes.SET_RECORDS]: recordStateUpdaters.setRecordsUpdater,
  [ActionTypes.ADD_RECORD]: recordStateUpdaters.addRecordUpdater,
  [ActionTypes.SET_RECORD]: recordStateUpdaters.setRecordUpdater,
  [ActionTypes.REMOVE_RECORD]: recordStateUpdaters.removeRecordUpdater,
};

export default handleActions(actionHandler, recordStateUpdaters.INITIAL_RECORD_STATE);

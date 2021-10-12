import { handleActions } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';
import * as mainStateUpdaters from './main-state-updaters';

const actionHandler = {
  [ActionTypes.SET_CARS]: mainStateUpdaters.setCarsUpdater,
};

export default handleActions(actionHandler, mainStateUpdaters.INITIAL_MAIN_STATE);

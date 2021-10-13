import { handleActions } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';
import * as carStateUpdaters from './car-state-updaters';

const actionHandler = {
  [ActionTypes.SET_CARS]: carStateUpdaters.setCarsUpdater,
  [ActionTypes.ADD_CAR]: carStateUpdaters.addCarUpdater,
  [ActionTypes.SET_CAR]: carStateUpdaters.setCarUpdater,
  [ActionTypes.REMOVE_CAR]: carStateUpdaters.removeCarUpdater,
};

export default handleActions(actionHandler, carStateUpdaters.INITIAL_CAR_STATE);

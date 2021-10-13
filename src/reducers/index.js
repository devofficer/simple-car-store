import { combineReducers } from 'redux';
import carStateReducer from './car-state';
import recordStateReducer from './record-state';
import auxiliaryStateReducer from './auxiliary-state';

const reducers = combineReducers({
  car: carStateReducer,
  record: recordStateReducer,
  auxiliary: auxiliaryStateReducer,
});

export default reducers;

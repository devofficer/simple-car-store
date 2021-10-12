import { combineReducers } from 'redux';
import mainStateReducer from './main-state';

const reducers = combineReducers({
  main: mainStateReducer,
});

export default reducers;

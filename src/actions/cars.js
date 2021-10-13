import { createAction } from 'redux-actions';
import { setError } from './auxiliary';
import * as ActionTypes from 'utils/action-types';
import * as API from 'services/cars';

export const setCars = createAction(ActionTypes.SET_CARS, payload => payload);
export const addCar = createAction(ActionTypes.ADD_CAR, payload => payload);
export const removeCar = createAction(ActionTypes.REMOVE_CAR, payload => payload);
export const setCar = createAction(ActionTypes.SET_CAR, payload => payload);

export const createCar = (params) => (dispatch) => {
  API.createCar(params)
    .then(res => dispatch(addCar(res.data)))
    .catch(err => dispatch(setError(err.response.data.error)));
};

export const readCars = () => (dispatch) => {
  API.readCars()
    .then(res => dispatch(setCars(res.data)))
    .catch(err => dispatch(setError(err.response.data.error)));
};

export const deleteCar = (carId) => (dispatch) => {
  API.deleteCar(carId)
    .then(() => dispatch(removeCar(carId)))
    .catch(err => dispatch(setError(err.response.data.error)));
};

export const updateCar = (params) => (dispatch) => {
  API.updateCar(params)
    .then(res => dispatch(updateCar(res.data)))
    .catch(err => dispatch(setError(err.response.data.error)));
};


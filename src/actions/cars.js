import { createAction } from 'redux-actions';
import * as ActionTypes from 'utils/action-types';
import * as API from 'services/cars';

export const setCars = createAction(ActionTypes.SET_CARS, payload => payload);
export const addCar = createAction(ActionTypes.ADD_CAR, payload => payload);
export const removeCar =  createAction(ActionTypes.REMOVE_CAR, payload => payload);
export const setCar = createAction(ActionTypes.SET_CAR, payload => payload);

export const createCar = (params) => (dispatch) => {
  API.createCar(params).then(data => dispatch(addCar(data)));
};

export const readCars = () => (dispatch) => {
  API.readCars().then(data => dispatch(setCars(data)));
};

export const deleteCar = (carId) => (dispatch) => {
  API.deleteCar(carId).then(() => dispatch(removeCar(carId)));
};

export const updateCar = (params) => (dispatch) => {
  API.updateCar(params).then(data => dispatch(updateCar(data)));
};


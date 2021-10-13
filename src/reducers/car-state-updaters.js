export const INITIAL_CAR_STATE = Object.freeze({
  cars: [],
});

export const setCarsUpdater = (state, { payload }) => ({
  ...state,
  cars: payload || [],
});

export const addCarUpdater = (state, { payload }) => ({
  ...state,
  cars: [...state.cars, payload],
});

export const setCarUpdater = (state, { payload }) => ({
  ...state,
  cars: state.cars.map(c => c._id === payload._id ? payload : c),
});

export const removeCarUpdater = (state, { payload: carId }) => ({
  ...state,
  cars: state.cars.filter(c => c._id !== carId),
});

export const setSellRecordsUpdater = (state, { payload: records }) => ({
  ...state,
  records,
});


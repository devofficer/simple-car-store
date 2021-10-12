export const INITIAL_MAIN_STATE = Object.freeze({
  cars: [],
  records: [],
});

export const setCarsUpdater = (state, { payload: cars }) => ({
  ...state,
  cars,
});

export const addCardUpdater = (state, { payload }) => ({
  ...state,
  cars: [...state.cars, payload],
});

export const removeCarUpdater = (state, { payload: carId }) => ({
  ...state,
  cars: state.cars.filter(c => c.id !== carId),
});

export const setSellRecordsUpdater = (state, { payload: records }) => ({
  ...state,
  records,
});


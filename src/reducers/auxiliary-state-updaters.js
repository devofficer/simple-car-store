export const INITIAL_ERROR_STATE = Object.freeze({
  error: null,
});

export const setErrorUpdater = (state, { payload }) => ({
  ...state,
  error: payload || null,
});


export const INITIAL_RECORD_STATE = Object.freeze({
  records: [],
});

export const setRecordsUpdater = (state, { payload }) => ({
  ...state,
  records: payload || [],
});

export const addRecordUpdater = (state, { payload }) => ({
  ...state,
  records: [...state.records, payload],
});

export const setRecordUpdater = (state, { payload }) => ({
  ...state,
  records: state.records.map(c => c._id === payload._id ? payload : c),
});

export const removeRecordUpdater = (state, { payload: recordId }) => ({
  ...state,
  records: state.records.filter(c => c._id !== recordId),
});

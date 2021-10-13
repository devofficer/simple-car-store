import axios from './axios';

export const createRecord = async (params) => {
  return await axios.post('/record', params);
};

export const readRecords = async () => {
  return await axios.get('/record');
};

export const updateRecord = async (params) => {
  return await axios.put('/record', params);
};

export const deleteRecord = async (recordId) => {
  return await axios.delete(`/record/${recordId}`);
};

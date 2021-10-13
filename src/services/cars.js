import axios from './axios';

export const createCar = async (params) => {
  return await axios.post('/car', params);
};

export const readCars = async () => {
  return await axios.get('/car');
};

export const updateCar = async (params) => {
  return await axios.put('/car', params);
};

export const deleteCar = async (carId) => {
  return await axios.delete(`/car/${carId}`);
};

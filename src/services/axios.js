import axios from 'axios';
import { API_PROXY_URL } from 'config';

const apiAxios = axios.create({
  baseURL: API_PROXY_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

apiAxios.interceptors.response.use((res) => {
  return res.data;
});

export default apiAxios;

import axios from 'axios';

const API_URL = "https://api.escuelajs.co/api/v1";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
});

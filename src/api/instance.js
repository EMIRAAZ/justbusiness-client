import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/v1';

export const api = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
});
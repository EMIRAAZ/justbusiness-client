import axios from 'axios';

// const API_BASE_URL = 'http://127.0.0.1:4000/api/v1';
const API_BASE_URL = 'https://www.propertyseller.ae/api/v1';
export const api = axios.create({
  withCredentials: true,
  headers: { 'Content-Type': 'application/json'},
  baseURL: API_BASE_URL,
});

// 
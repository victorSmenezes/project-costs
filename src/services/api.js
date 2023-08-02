import axios from 'axios';

const api = axios.create({
  baseURL: 'https://project-costs-api.vercel.app'
});

export default api;

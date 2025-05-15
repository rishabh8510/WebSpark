import axios from 'axios';

const API = axios.post({
  baseURL: 'http://localhost:5000/api/auth', 
  withCredentials: true, 
});

export default API;

import axios from 'axios';
import { ArmazenadorToken } from '../utils/ArmazenadorTokens';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});
http.interceptors.request.use(function (config) {
  const token = ArmazenadorToken.accessToken
  if (token) {
    config.headers.Authorization = `${token}`
    console.log('Token foi adicionado ao cabeçalho')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default http;
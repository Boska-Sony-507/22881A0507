// axiosLogger.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com',
});

// Request logging
api.interceptors.request.use(request => {
  console.log(`[API Request] ${request.method.toUpperCase()} ${request.url}`, request);
  return request;
}, error => {
  console.error('[API Request Error]', error);
  return Promise.reject(error);
});

// Response logging
api.interceptors.response.use(response => {
  console.log(`[API Response] ${response.status} ${response.config.url}`, response);
  return response;
}, error => {
  if (error.response) {
    console.error(`[API Response Error] ${error.response.status} ${error.config.url}`, error.response);
  } else {
    console.error('[API Response Error]', error.message);
  }
  return Promise.reject(error);
});

export default api;

import axios from "axios";

const service = axios.create();

service.defaults.timeout = 60*1000*5;
// http request 拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.error(err);
    Promise.reject(err);
  }
);

// http response 拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default service;

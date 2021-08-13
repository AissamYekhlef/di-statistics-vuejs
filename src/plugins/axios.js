  
"use strict";

import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';

const user = JSON.parse(localStorage.getItem("user"));
if(user.access_token){
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
}

axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://di-statistics.herokuapp.com"
      : "http://127.0.0.1:8000/api",
  timeout: 60 * 1000, // Timeout
  withCredentials: false, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios;
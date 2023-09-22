import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // " Access-Control-Allow-Origin": "*",
    // mode: "no-cors",
  },
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };

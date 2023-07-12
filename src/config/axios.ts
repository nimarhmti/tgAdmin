import axios from "axios";
const BASE_URL = "www.apitest.com";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export { api };

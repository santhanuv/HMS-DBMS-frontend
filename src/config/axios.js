import axios from "axios";

// const BASE_URL = "https://hms-dbms.herokuapp.com/";
const BASE_URL = "http://localhost:5000/";

export default axios.create({
  baseURL: BASE_URL,
});

export const sessionAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

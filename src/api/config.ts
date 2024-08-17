import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const api = axios.create({
  baseURL: "https://parentsdream.info",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${cookies.get("accessToken")}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

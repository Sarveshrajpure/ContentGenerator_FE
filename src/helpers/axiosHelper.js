import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "dev" ? `${process.env.REACT_APP_LOCAL_SETUP_BASE_URL}/api` : "",
  withCredentials: true,
});
axios.defaults.headers.post["Content-Type"] = "application/json";

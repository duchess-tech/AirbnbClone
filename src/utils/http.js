import axios from "axios";
const httpAuth = axios.create({
  // baseURL: 'http://localhost:5000/listing/propertyid',
  baseURL: `https://airbnclone-backend10.onrender.com`,
  headers: {
    "Content-Type": "application/json",
  },
});

httpAuth.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default httpAuth;
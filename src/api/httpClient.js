import axios from "axios";
const BASE_URL = "http://localhost:3000/";

const httpClient = axios.create({
  baseURL: BASE_URL
});

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return "Bearer " + token;
};

const authInterceptor = config => {
  if (getAuthToken() !== null) {
    config.headers["Authorization"] = getAuthToken();
  }
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;

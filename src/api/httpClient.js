import axios from "axios";
import router from "@/routes";
import NotificationService from "@/lib/notification.lib";

// HARD CODE
const BASE_URL = "http://localhost:3000/";

/**
 * Init axios singleton
 */
const httpClient = axios.create({
  baseURL: BASE_URL
});

/**
 * Authentication handle
 * Bearer Token
 */
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

/**
 * Request interceptor handle
 * 401, 500, ...
 */
const errorInterceptor = error => {
  // all the error responses
  switch (error.response.status) {
    case 401: // authentication error, logout the user
      NotificationService.authenticationError();
      router.push("/about");
      break;

    default:
      Notification.serverError();
      router.push("/500");
  }
  return Promise.reject(error);
};

/**
 * Axios using config
 */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(null, errorInterceptor);

export default httpClient;

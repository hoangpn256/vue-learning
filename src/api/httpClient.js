import axios from "axios";
import router from "@/routes";
import store from "@/store";

import NotificationService from "@/lib/notification.lib";

// HARD CODE
const BASE_URL = "http://localhost:3000/";

/**
 * Init axios singleton
 */
const httpClient = axios.create({
  baseURL: BASE_URL
});

const authInterceptor = config => {
  console.log('axios interceptor config', config.headers);
  return config;
};

/**
 * Request interceptor handle
 * 401, 500, ...
 */
const errorInterceptor = async error => {
  // all the error responses
  switch (error.response.status) {
    case 401: // authentication error, logout the user
      NotificationService.authenticationError();
      console.log('401 interceptor handle here!')
      await store.dispatch("Auth/logout");
      router.push("/login");
      break;
    case 404:
      NotificationService.notFound();
      router.push("/");
      break;
    default:
      NotificationService.serverError();
  }
  return Promise.reject(error);
};

/**
 * Axios using config
 */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(null, errorInterceptor);

export default httpClient;

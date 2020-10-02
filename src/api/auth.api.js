import httpClient from "./httpClient";

const LOGIN_URL = "/login";
const LOGOUT_URL = "/logout";
const USER_URL = "/current";

export default class AuthService {
  /**
   * Login
   * @param  { object } params { email: 'abc@mail.com', password: 'password' }
   *
   * @returns {AxiosPromise<any>}
   */
  static login(params) {
    return httpClient.post(LOGIN_URL, params);
  }

  /**
   * Logout
   * @returns {AxiosPromise<any>}
   */
  static logout() {
    return httpClient.delete(LOGOUT_URL);
  }

  /**
   * User profile
   * @returns {AxiosPromise<any>}
   */
  static getProfile() {
    return httpClient.get(USER_URL);
  }

  /**
   * set token for httpClient
   */
  static setToken(token) {
    const bearerToken = "Bearer " + token;
    httpClient.headers.common["Authorization"] = bearerToken;
  }

  /**
   * remote token for httpClient
   */
  static removeToken() {
    delete httpClient.headers.common["Authorization"];
  }
}

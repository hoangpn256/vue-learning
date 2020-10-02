import AuthService from "@/api/auth.api.js";
import NotificationService from "@/lib/notification.lib";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_PROFILE = "SET_PROFILE";

const initState = () => ({
  user: {},
  token: localStorage.getItem("user-token") || ""
});

const state = initState();

const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
  getProfile(state) {
    return state.user;
  },
  getToken(state) {
    return state.token;
  }
};

const mutations = {
  [LOGOUT](state) {
    const newState = initState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key];
    });
  },
  [LOGIN](state, token) {
    state.token = token;
  },
  [SET_PROFILE](state, profile) {
    state.user = profile;
  }
};

const actions = {
  /**
   * login
   * @param  { params } { email: 'abc@mail.com', password: 'password' }
   */
  async login({ commit }, { params: params }) {
    try {
      const response = await AuthService.login(params);
      const responseData = response.data;
      if (responseData.status) {
        const token = responseData.data.token;
        const user = responseData.data.profile;
        NotificationService.succesLogin();
        commit(LOGIN, token);
        commit(SET_PROFILE, user);
        localStorage.setItem("user-token", token);
        AuthService.setToken(token);
      } else {
        NotificationService.invalidAccount();
      }
    } catch {
      //error handle
    }
  },

  /**
   * logout
   * reset all state
   */
  async logout({ commit }) {
    try {
      await AuthService.logout();
      localStorage.removeItem("user-token");
      commit(LOGOUT);
      AuthService.removeToken();
      NotificationService.succesLogout();
    } catch {
      // error handle
    }
  },

  /**
   * get Profile
   */
  async fetchProfile({ commit }) {
    try {
      const response = await AuthService.getProfile();
      commit(SET_PROFILE, response.data.data);
    } catch {
      //error handle
    }
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

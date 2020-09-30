/*
*   store/modules/image.module.js
*/
import ImageService from '@/api/images.api.js';

const initState = () => ({
  images: [],
  image: {}
});

const state = initState;

const getters = {
  getImages(state) {
    return state.images;
  },
  getImage(state) {
    return state.image;
  }
};

const mutations = {
  RESET(state) {
    const newState = initState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key];
    });
  },
  SET_IMAGE(state, data) {
    state.image = data;
  },
  SET_IMAGES(state, data) {
    state.images = data;
  }
};

const actions = {
    async fetchImages({ commit }){
        const response = await ImageService.getAll();
        commit("SET_IMAGES", response.data.data.images); 
        console.log(response);
    }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

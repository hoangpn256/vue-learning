/*
 *   store/modules/image.module.js
 */
import ImageService from "@/api/images.api.js";

const SET_IMAGE = "SET_IMAGE";
const SET_IMAGES = "SET_IMAGES";
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
  [SET_IMAGE](state, data) {
    state.image = data;
  },
  [SET_IMAGES](state, data) {
    state.images = data;
  }
};

const actions = {
  /**
   * fetch images from server
   */
  async fetchImages({ commit }) {
    try{
      const response = await ImageService.getAll();
      commit(SET_IMAGES, response.data.data.images);
    }catch(error) {
      console.log(error)
    }
  },
  /**
   * if image exists in images, then find and setImage
   * if not, then call api to server
   */
  async fetchImage({ commit, getters }, { id }) {
    const imageDetail = getters.getImages.find(item => item.id === id);
    let imageData = {};
    if (imageDetail) {
      imageData = imageDetail;
    } else {
      const response = await ImageService.getDetail(id);
      imageData = response.data.data;
    }
    commit(SET_IMAGE, imageData);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

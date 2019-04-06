import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visibility: false,
  },
  getters: {
    isVisible: state => state.visibility,
  },
  mutations: {
    changeVisibility(state) {
      state.visibility = !state.visibility;
    },
  },
});

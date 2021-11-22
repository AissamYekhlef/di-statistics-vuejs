import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./auth/index";
import fields from "./fields/index";

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    drawer: true
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
    }
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    }
  },   
  modules: {
    auth,
    fields
  }
});

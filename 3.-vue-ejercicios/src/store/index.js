import Vue from 'vue'
import Vuex from 'vuex'

import crudApi from '../modules/crudApi';
import crudApp from '../modules/crudApp';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    crudApi,
    crudApp
  }
})

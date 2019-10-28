import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: function (state) {
      return state.count + 1;
    }
  },
  mutations: {
    add: function (state) {
     state.count = state.count + 1;
    },
    reduce: function (state) {
      state.count = state.count - 1;
    }
  }
});

export default store;

import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate'

function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

export default new Vuex.Store({
  state: {
    shopItems: []
  },
  getters: {
    getShopItems: state => state.shopItems,
  },
  mutations: {
    setShopItem: (state, resp) => {
      state.shopItems.push(resp);
      Vue.set(state, 'shopItems', unique(state.shopItems));
    },
    deleteShopItem: (state, resp) => {
      let f = state.shopItems.findIndex(s => s == resp);
      Vue.delete(state.shopItems, f)
    },
  },
  plugins: [createPersistedState()],
})

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
    shopItems: [],
    status: '',
  },
  getters: {
    getShopItems: state => state.shopItems,
    getStatus: state => state.status,
  },
  mutations: {
    setShopItemId: (state, resp) => {
      // Vue.set(state, 'shopItems', 200);
      state.shopItems = [
        ...state.shopItems.filter(s => s.id !== resp.id),
        {
          id: resp.id,
          quantity: resp.quantity,
        }
      ]
    },
    setShopItem: (state, resp) => {
      let b = state.shopItems.filter(s => s.id == resp.id);
      if(b.length == 0) {
        state.shopItems.push({
          id: resp.id,
          quantity: resp.quantity,
        });
        Vue.set(state, 'status', 200);
      } else {
        Vue.set(state, 'status', 400);
      }
    },
    deleteShopItem: (state, resp) => {
      let f = state.shopItems.findIndex(s => s == resp);
      Vue.delete(state.shopItems, f)
    },
  },
  plugins: [createPersistedState()],
})

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
    shopItems2: [],
    status: '',
  },
  getters: {
    getShopItems: state => state.shopItems,
    getShopItems2: state => state.shopItems2,
    getStatus: state => state.status,
  },
  mutations: {
    setShopItemQuantity: (state, resp) => {
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
          ...resp,
        });
        Vue.set(state, 'status', 200);
      } else {
        Vue.set(state, 'status', 400);
      }
    },
    deleteShopItem: (state, resp) => {
      state.shopItems = state.shopItems.filter(e => e.id != resp);
    },
    deleteAllShopItems: (state) => {
      state.shopItems = [];
    },
    setShopItem2Quantity: (state, resp) => {
      state.shopItems2 = [
        ...state.shopItems2.filter(s => s.title !== resp.title),
        {
          ...resp,
        }
      ]
    },
    setShopItem2: (state, resp) => {
      state.shopItems2.push({
        id: state.shopItems2.length,
        ...resp,
        quantity: 1,
      });
    },
    deleteShopItem2: (state, resp) => {
      state.shopItems2 = state.shopItems2.filter(e => e.id != resp);
    },
    deleteAllShopItems2: (state) => {
      state.shopItems2 = [];
    },
  },
  plugins: [createPersistedState()],
})

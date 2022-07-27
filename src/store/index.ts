
import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'



export default createStore({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
       
      }
    }
  })],
  state: {
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

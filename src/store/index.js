import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentes: [{
      indice: 1,
      titulo: 'componente1'
    }, {
      indice: 2,
      titulo: 'componente2'
    }, {
      indice: 3,
      titulo: 'componente3'
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

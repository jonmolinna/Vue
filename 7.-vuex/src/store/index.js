import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Vuex desde Cero.',
    nombre: 'Jon',
    apellido: 'Dallas',
    amigos: ['Dallas', 'Noah', 'Kendra'],
    amigo: null,
  },
  // Sirven para cambiar los datos del estado, para realizar un mutation debe ser llamado por un accion
  mutations: {
    addAmigo( state ) {
      state.amigos = [state.amigo, ...state.amigos]
    }
  },
  actions: {
    addAmigoAction( context ){
      context.commit('addAmigo');
    }
  },
  // Los getters permiten acceder a las variables del estado.
  getters: {
    mensaje(state){
      return state.msg
    },
    nombreCompleto( state ){
      return `${state.nombre} ${state.apellido}`
    }
  },
  modules: {
  }
})

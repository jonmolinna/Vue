import { createStore } from "vuex";
import { shopping } from "./shopping.module";

export default createStore({
  state: {
    // Estados
    // contador = 0
    // Data
    counter: 1,
  },
  getters: {
    // Nos permite obtener datos de los estados
    // los getters da un valor computado state + number
    // computed
    times2(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    // setters, son los metodos que nos va a permitir modificar los estados
    // Modificaciones sin-asincronas
    // Sin asyn
    setCounter(state, value) {
      state.counter = value;
    },
  },
  actions: {
    // No s va a modificar el estado de los estados
    // Modificacion de asincronas (async - await)
    // comsumir una api
  },
  modules: {
    // Pemite subdividir los stores
    // subdivide el store
    shopping,
  },
});

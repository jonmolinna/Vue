import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [
      {id: 1, name: 'Manzana', precio: "2.30", stock: 12,categoria: 'Frutas'},
      {id: 2, name: 'Pera', precio: "2.60", stock: 23, categoria: 'Frutas'},
      {id: 3, name: 'Fideos', precio: "4.30", stock: 45, categoria: 'Abarrotes'},
      {id: 4, name: 'Trucha', precio: "14", stock: 10, categoria: 'Carne'},
    ],
    update: false,
    idProduct: null,
    nameProduct: '',
    precioProduct: '',
    stockProduct: '',
    categoriaProduct: '',
  },
  mutations: {
    addProductos(state, product){
      state.productos.push(product)
    },
    deleteProductos(state, id){
      state.productos = state.productos.filter(element => element.id != id)
    },
    update(state, product){
      state.update = true;
      state.idProduct = product.id;
      state.nameProduct = product.name;
      state.precioProduct = product.precio;
      state.stockProduct = product.stock;
      state.categoriaProduct = product.categoria;
    },
    updateProduct(state, product){
      state.productos.forEach(element => {
        if(element.id === product.id){
          element.name = product.name
          element.categoria = product.categoria
          element.precio = product.precio
          element.stock = product.stock
        }
      })
      state.update = false;
    },

  },
  actions: {
    addProductActions(context , product){
      context.commit('addProductos', product)
    },
    deleteProductActions(context, id){
      context.commit('deleteProductos', id)
    },
    updateAction(context, product){
      context.commit('update', product)
    },
    updateProductAction(context, product){
      context.commit('updateProduct', product)
    },
  },
  getters: {

  },
  modules: {
  }
})

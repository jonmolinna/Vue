import productInterface from "@/interface/product.iterface";
import { MutationTree } from "vuex";

interface stateInterface {
  products: productInterface[];
  product: productInterface | null;
}

// State
const state: stateInterface = {
  products: [],
  product: null,
};

// Getters

// Mutations
export const mutations: MutationTree<stateInterface> = {
  addProduct(state, payload: productInterface) {
    state.products = [payload, ...state.products];
  },

  deleteProduct(state, payload: number) {
    state.products = state.products.filter((product) => product.id !== payload);
  },

  findProductById(state, payload: number) {
    const product = state.products.find((product) => product.id === payload);

    if (product) {
      state.product = product;
    }
  },
  updatedProduct(state, payload: productInterface) {
    const product = state.products.find((product) => product.id === payload.id);
    if (product) {
      state.products = state.products.map((item) =>
        item.id === product.id ? { ...payload, id: item.id } : item
      );
    }
  },
};

export const products = {
  namespace: true,
  state,
  mutations,
};

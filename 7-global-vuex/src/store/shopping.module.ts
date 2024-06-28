import productData from "@/data/product.data";
import cartInterface from "@/interface/cart.interface";
import productInterface from "@/interface/product.iterface";
import { GetterTree, MutationTree } from "vuex";

export interface stateInterface {
  products: productInterface[];
  carts: cartInterface[];
}

// state
export const state: stateInterface = {
  products: productData,
  carts: [],
};

// getters
export const getters: GetterTree<stateInterface, any> = {
  getQuantityProducts(state): number {
    return state.carts.reduce((quantity, cart) => quantity + cart.quantity, 0);
  },

  getQuantitySales(state): number {
    return state.carts.reduce(
      (sale, cart) => sale + cart.price * cart.quantity,
      0
    );
  },
};

// mutations
export const mutations: MutationTree<stateInterface> = {
  addProductToCart(state, payload: productInterface) {
    const product = state.carts.find((item) => item.id === payload.id);
    if (product) {
      state.carts = state.carts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      state.carts = [...state.carts, { ...payload, quantity: 1 }];
    }
  },

  deleteProductToCart(state, payload: number) {
    const product = state.carts.find((item) => item.id === payload);
    if (product) {
      state.carts = state.carts.filter((item) => item.id !== product.id);
    }
  },

  addQuantityCart(state, payload: number) {
    const product = state.carts.find((item) => item.id === payload);
    if (product) {
      state.carts = state.carts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  },

  restQuantityCart(state, payload: number) {
    const product = state.carts.find((item) => item.id === payload);
    if (product) {
      state.carts = state.carts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
          : item
      );
    }
  },
};

// actions
// ...........

export const shopping = {
  namespace: true,
  state,
  getters,
  mutations,
};

// https://oclk.medium.com/advanced-vuex-state-management-application-is-based-on-vue-3-written-in-typescript-50c2b4682a32

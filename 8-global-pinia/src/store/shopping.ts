import productData from "@/data/product.data";
import cartInterface from "@/interface/cart.interface";
import productInterface from "@/interface/product.iterface";
import { defineStore } from "pinia";

interface stateInterface {
  products: productInterface[];
  carts: cartInterface[];
}

export const useShopping = defineStore("shopping", {
  state: (): stateInterface => {
    return {
      products: productData,
      carts: [],
    };
  },

  getters: {
    getQuantityProductCart: (state) =>
      state.carts.reduce((quantity, cart) => quantity + cart.quantity, 0),

    getQuantitySale: (state) =>
      state.carts.reduce((sale, cart) => sale + cart.price * cart.quantity, 0),
  },

  actions: {
    addProductToCart(payload: productInterface) {
      const product = this.carts.find((item) => item.id === payload.id);

      if (product) {
        this.carts = this.carts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        this.carts = [...this.carts, { ...payload, quantity: 1 }];
      }
    },

    deleteCart(payload: number) {
      const product = this.carts.find((item) => item.id === payload);

      if (product) {
        this.carts = this.carts.filter((item) => item.id !== product.id);
      }
    },

    sumQuantityCart(payload: number) {
      const product = this.carts.find((item) => item.id === payload);

      if (product) {
        this.carts = this.carts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },

    restQuantityCart(payload: number) {
      const product = this.carts.find((item) => item.id === payload);

      if (product) {
        this.carts = this.carts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
            : item
        );
      }
    },
  },
});

import productData from "@/data/product.data";
import cartInterface from "@/interface/cart.interface";
import productInterface from "@/interface/product.iterface";
import { defineStore } from "pinia";

export const useShopping = defineStore("shopping", {
  state: () => {
    return {
      products: <productInterface[]>productData,
      carts: <cartInterface[]>[],
    };
  },

  actions: {
    addProductToCart(payload: productInterface) {
      const product = this.carts.find((item) => item.id === payload.id);

      if (product) {
        this.carts = this.carts.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity++ } : item
        );
      } else {
        this.carts = [...this.carts, { ...payload, quantity: 1 }];
      }
    },
  },
});

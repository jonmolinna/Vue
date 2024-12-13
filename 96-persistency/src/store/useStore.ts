import { defineStore } from "pinia";

export const useStore = defineStore("useStore", {
  state: () => {
    return {
      count: 1,
    };
  },
  actions: {
    increment(val = 1) {
      this.count += val;
    },
  },
  //   persist: true,
  persist: {
    storage: sessionStorage,
    pick: ["count"],
  },
});

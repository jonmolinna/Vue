import { defineStore } from "pinia";

export const useCount = defineStore("useCount", {
  state: () => {
    return {
      count: 1,
    };
  },

  actions: {
    init() {
      const initialCount = localStorage.getItem("count");
      if (initialCount) {
        this.count = parseInt(initialCount);
      }
    },
    increment(val = 1) {
      this.count += val;
      localStorage.setItem("count", this.count.toString());
    },
  },
});

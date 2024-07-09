import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // State
  state: () => {
    return {
      count: 0,
    };
  },

  // Getters
  getters: {
    times2: (state) => state.count * 2,
  },

  // Actions
  actions: {
    increment(payload: number) {
      this.count += payload;
    },
  },
});

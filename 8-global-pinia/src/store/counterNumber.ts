import { defineStore } from "pinia";

export const useCounterNumberStore = defineStore("counterNumber", {
  state: () => ({ number: 0 }),
  actions: {
    sumNumber(payload: number) {
      this.number += payload;
    },

    resetNumber() {
      this.number = 0;
    },

    restNumber(payload: number) {
      this.number -= payload;
    },
  },
});

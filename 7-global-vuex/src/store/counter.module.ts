import { MutationTree } from "vuex";

interface stateInterface {
  number: number;
}

// State
const state: stateInterface = {
  number: 0,
};

// Getters

// Mutation
const mutations: MutationTree<stateInterface> = {
  sumNumber(state, payload: number) {
    state.number = state.number + payload;
  },

  resetNumber(state) {
    state.number = 0;
  },

  restNumber(state, payload: number) {
    state.number = state.number - payload;
  },
};

export const number = {
  namespace: true,
  state,
  mutations,
};

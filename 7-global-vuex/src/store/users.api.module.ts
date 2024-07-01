import { userInterface } from "@/interface/user.interface";
import { ActionTree, MutationTree } from "vuex";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

interface stateInterface {
  users: userInterface[];
}

// State
const state: stateInterface = {
  users: [],
};

// Getters

// Mutations
const mutations: MutationTree<stateInterface> = {
  getAllUsers(state, payload: userInterface[]) {
    state.users = payload;
  },
};

// Actions
const actions: ActionTree<stateInterface, any> = {
  async getAllUsers(context) {
    await axios
      .get(url)
      .then((response) => {
        const users: userInterface = response.data;
        context.commit("getAllUsers", users);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },

  async deleteUserById({ commit }, user: number) {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then((response) => {
        const user = response.data;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
};

export const users = {
  namespace: true,
  state,
  mutations,
  actions,
};

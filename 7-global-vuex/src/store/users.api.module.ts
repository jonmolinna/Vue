import { userInterface } from "@/interface/user.interface";
import { ActionTree, MutationTree } from "vuex";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

interface stateInterface {
  users: userInterface[];
  user: userInterface | null;
}

// State
const state: stateInterface = {
  users: [],
  user: null,
};

// Getters

// Mutations
const mutations: MutationTree<stateInterface> = {
  getAllUsers(state, payload: userInterface[]) {
    state.users = payload;
  },
  deleteUserById(state, payload: number) {
    state.users = state.users.filter((user) => user.id !== payload);
  },
  addUser(state, payload: userInterface) {
    state.users = [payload, ...state.users];
  },
  findUserById(state, payload: number) {
    const user: userInterface | undefined = state.users.find(
      (user) => user.id === payload
    );

    if (user) {
      state.user = user;
    }
  },
  updatedUser(state, payload: userInterface) {
    const user = state.users.find((item) => item.id === payload.id);

    if (user) {
      state.users = state.users.map((item) =>
        item.id === user.id
          ? { ...item, email: payload.email, name: payload.name }
          : item
      );
    }
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
      .delete(`${url}/${user}`)
      .then((response) => {
        const res = response.data;
        commit("deleteUserById", user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },

  async addUser({ commit }, user: userInterface) {
    await axios
      .post(url, user)
      .then((response) => {
        commit("addUser", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },

  async updatedUser({ commit }, user: userInterface) {
    const { id, ...rest } = user;
    await axios
      .put(`${url}/${id}`, user)
      .then((response) => {
        commit("updatedUser", response.data);
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

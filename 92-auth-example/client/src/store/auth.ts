import { defineStore } from "pinia";
import { toHandlers } from "vue";

const useAuth = defineStore("auth", {
  state: () => {
    return {
      token: null,
      baseURL: "http://localhost:9000",
    };
  },
  actions: {
    async register(name: string, email: string, password: string) {
      const url = `${this.baseURL}/users/register`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        });

        const res = await response.json();

        if (res.status === true) {
          // this.token = res.token
          return true;
        }

        return false;
      } catch (error) {
        console.log("ERROR", error);
        return false;
      }
    },
    async login(email: string, password: string) {
      const url = `${this.baseURL}/auth/login`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const res = await response.json();

        if (res.status === true) {
          this.token = res.token;
          return true;
        } else {
          this.token = null;
          return false;
        }

        console.log("response", res);
      } catch (error) {
        console.log("Error", error);
        return false;
      }
    },
    async getNotes() {
      const url = `${this.baseURL}/nota/notas`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });

      const res = await response.json();
    },
    async createNotes(content: string) {
      const url = `${this.baseURL}/nota/add`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          content: content,
        }),
      });

      const res = await response.json();
    },
  },
});

export default useAuth;

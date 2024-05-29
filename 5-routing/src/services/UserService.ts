import userInterface from "@/interfaces/user.interface";
import { Ref, ref } from "vue";

class UserService {
  private users: Ref<Array<userInterface>>;

  constructor() {
    this.users = ref<Array<userInterface>>([]);
  }

  getAllUsers(): Ref<Array<userInterface>> {
    return this.users;
  }

  async fetchAllUsers(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const json = await response.json();
      this.users.value = json;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export default UserService;

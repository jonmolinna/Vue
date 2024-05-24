import { userInterface } from "@/interfaces/user.interface";
import { ref, Ref, toHandlers } from "vue";

class UserService {
  private users: Ref<Array<userInterface>>;

  constructor() {
    this.users = ref<Array<userInterface>>([]);
  }

  getAllUsers(): Ref<Array<userInterface>> {
    return this.users;
  }

  async fetchAll(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const json = await response.json();
      this.users.value = await json;
    } catch (err) {
      console.log("Error", err);
    }
  }
}

export default UserService;

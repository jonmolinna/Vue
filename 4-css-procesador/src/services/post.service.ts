import { Ref, ref } from "vue";
import todosInterface from "@/interfaces/post.interface";

class TodosService {
  private todos: Ref<Array<todosInterface>>;

  constructor() {
    this.todos = ref<Array<todosInterface>>([]);
  }

  getTodos(): Ref<Array<todosInterface>> {
    return this.todos;
  }

  async fetchAllTodos(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(url);
      const json = await response.json();
      this.todos.value = await json;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export default TodosService;

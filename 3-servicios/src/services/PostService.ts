import { Ref, ref } from "vue";
import postInterface from "@/interfaces/post.interface";

class PostService {
  private posts: Ref<Array<postInterface>>;

  constructor() {
    this.posts = ref<Array<postInterface>>([]);
  }

  getPosts(): Ref<Array<postInterface>> {
    return this.posts;
  }

  async fetchAll(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const json = await response.json();
      this.posts.value = await json;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export default PostService;

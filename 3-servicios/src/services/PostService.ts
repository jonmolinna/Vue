import { ref } from "vue";

class PostService {
  private posts;

  constructor() {
    this.posts = ref([]);
  }

  getPosts() {
    return this.posts;
  }

  async fetchAll() {
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

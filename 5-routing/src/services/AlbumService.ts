import albumInterface from "@/interfaces/album.interface";
import { Ref, ref } from "vue";

class AlbumService {
  private albums: Ref<Array<albumInterface>>;

  constructor() {
    this.albums = ref<Array<albumInterface>>([]);
  }

  getAllAlbumsByUserId(id: number) {
    return this.albums.value.find((album) => album.userId === id);
  }

  async fetchAllAlbum(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/albums";
      const response = await fetch(url);
      const json = await response.json();
      this.albums.value = json;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export default AlbumService;

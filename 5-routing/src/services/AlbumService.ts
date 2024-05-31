import albumInterface from "@/interfaces/album.interface";
import { Ref, ref } from "vue";

class AlbumService {
  private albums: Ref<Array<albumInterface>>;

  constructor() {
    this.albums = ref<Array<albumInterface>>([]);
  }

  getAllAlbumsByUserId() {
    console.log("AQUIIII", this.albums);
    return this.albums;
  }

  async fetchAllAlbum(id: string): Promise<void> {
    try {
      const url = `https://jsonplaceholder.typicode.com/albums/?userId=${id}`;
      const response = await fetch(url);
      const json = await response.json();
      this.albums.value = json;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export default AlbumService;

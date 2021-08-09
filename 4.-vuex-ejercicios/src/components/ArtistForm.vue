<template>
    <div class="card">
        <div class="card-body">
            <form @submit="searchArtist">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ingrese Artista..." v-model="name">
                </div>
                <div class="form-group">
                    <button class="btn btn-success form-control">Buscar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            name: "",
        }
    },
    methods: {
        ...mapActions(['getArtist']),

        searchArtist(e){
            e.preventDefault();
            if(!this.name) return window.alert("Ingrese Nombre del Artista");
            this.getArtist(this.name);
            this.name = "";
        },
    }
};
</script>
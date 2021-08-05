<template>
    <div>
        <aside v-if="Object.keys(artist).length > 0">
            <p><b>Nombre del Artista: </b>   {{artist.strArtist}}</p>
            <p><b>Fecha: </b> {{artist.intBornYear}} - {{artist.intDiedYear || "Actualidad"}}</p>
            <p><b>Genero: </b> {{artist.strGenre}}</p>
            <p><b>Estilo: </b> {{artist.strStyle}}</p>
            <p><b>Pais: </b> {{artist.strCountry}}</p>
            <img :src="artist.strArtistThumb" alt="" class="imagen">
        </aside>
        <Message  msg="No existe la artista" v-else />
    </div>
</template>

<script>
import Message from './Message.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        Message
    },
    computed: {
        ...mapGetters(['artist']),
    }

};
</script>

<style scoped>
    .imagen {
        height: 300px;
        widows: auto;
    }
</style>
<template>
  <div>
        <h3>Buscador de Artista</h3>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <ArtistForm />  
            </div>
            <div class="col-12 col-md-6">
                <Loader v-if="loading === true" />
                <ArtistDetails v-if="!loading && artist" />
            </div>
        </div>
  </div>
</template>

<script>
import ArtistForm from './ArtistForm.vue';
import ArtistDetails from './ArtistDetails.vue';
import Loader from './Loader.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        ArtistForm,
        ArtistDetails,
        Loader,
    },
    methods: {
        ...mapActions(['getArtist']),
    },
    computed: {
        ...mapGetters(['loading', 'artist']),
    },
};
</script>

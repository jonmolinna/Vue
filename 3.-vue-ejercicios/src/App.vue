<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <ArtistSearch />
      </div>
      <div class="col-12 mt-5">
        <CrudApp />
      </div>
      <div class="col-12 mt-5">
        <CrudApi />
      </div>
    </div>
  </div>
</template>

<script>
import CrudApi from './components/CrudApi.vue';
import CrudApp from './components/CrudApp.vue';
import ArtistSearch from './components/ArtistSearch.vue';

export default {
  name: 'App',
  components: {
    CrudApi,
    CrudApp,
    ArtistSearch,
  }
}
</script>

<style>

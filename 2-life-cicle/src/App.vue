<template>
  <h3>Comunicacion entre compoentes</h3>
  <PostLists></PostLists>
  <hr>
  <h3>Ciclo de vida</h3>
  <CicleLifeOptionApi></CicleLifeOptionApi>
  <br><br>
  <CicleLifeCompositionApi></CicleLifeCompositionApi>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CicleLifeOptionApi  from './components/CicleLifeOptionApi.vue';
import CicleLifeCompositionApi from './components/CicleLifeCompositionApi.vue';
import PostLists from './components/PostLists.vue';

export default defineComponent({
  name: 'App',
  components: {
    CicleLifeOptionApi,
    CicleLifeCompositionApi,
    PostLists,
  }
});
</script>

<style scoped>

</style>

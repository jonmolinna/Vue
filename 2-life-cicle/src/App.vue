<template>
  <h3>Computed</h3>
  <p>Computed Composition Api</p>
  <ComputedCompositionApi></ComputedCompositionApi>
  <p>Computed Option Api</p>
  <ComputedOptionApi></ComputedOptionApi>
  <hr>
  <h3>Ejercicios</h3>
  <TasksList></TasksList>
  <hr>
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
import TasksList from './ejercicio/TasksList.vue';
import ComputedOptionApi from './components/ComputedOptionApi.vue';
import ComputedCompositionApi from './components/ComputedCompositionApi.vue';

export default defineComponent({
  name: 'App',
  components: {
    CicleLifeOptionApi,
    CicleLifeCompositionApi,
    PostLists,
    TasksList,
    ComputedOptionApi,
    ComputedCompositionApi
  }
});
</script>

<style scoped>

</style>

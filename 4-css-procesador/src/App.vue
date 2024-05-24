<template>
  <div>
    <UsersLists />
    <br>
    <hr> 
    <br>
    <TodosLists />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodosLists from './components/TodosLists.vue';
import UsersLists from './components/UsersLists.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodosLists,
    UsersLists,
  }
});
</script>

<style lang="scss">

</style>

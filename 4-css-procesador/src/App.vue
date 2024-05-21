<template>
  <div>
    <TodosLists />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodosLists from './components/TodosLists.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodosLists
  }
});
</script>

<style lang="scss">

</style>

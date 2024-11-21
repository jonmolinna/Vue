<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="note in notes" :key="note"> {{ note }} <v-icon name="co-trash" scale="2" /></li>
  </TransitionGroup>

  <input type="text" v-model="note">
  <button @click="handleNote">Save note</button>

</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const notes = ref([]);
  const note = ref('');

  const handleNote = () => {
    notes.value.push(note.value)
    note.value = '';
  }

</script>

<style>
  /* enter-from // opacity: 0 */
  /* enter-active // opacity: 2s easse */
  /* enter-to // opacity: 1 */

  /* leave-from */
  /* leave-active */
  /* leave-to */

  .list-enter-active, .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  

</style>

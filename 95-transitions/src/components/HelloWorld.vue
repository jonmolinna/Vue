<template>
  <button @click="show = !show">Mostrar / Ocultar</button>

  <Transition>
    <h2 v-if="show">Hello World Animated</h2>
  </Transition>

</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const show = ref(false);

</script>

<style>
  /* enter-from // opacity: 0 */
  /* enter-active // opacity: 2s easse */
  /* enter-to // opacity: 1 */

  /* leave-from */
  /* leave-active */
  /* leave-to */

  .v-enter-active {
    transition: opacity 0.5s ease;
  }

  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from {
    opacity: 0;
  }

  .v-leave-to {
    opacity: 0;
  }

</style>
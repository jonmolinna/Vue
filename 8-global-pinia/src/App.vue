<template>
  <div class="container">
    <h2>Contador</h2>
    <p> {{ counterStore.count }} x 2 = {{ counterStore.times2 }}</p>
    <button @click="counterStore.increment(1)">Increment</button>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/store/counter';

  const counterStore = useCounterStore();


</script>

<style>
  .container {
        max-width: 700px;
        margin: 0 auto;
    }
  
  h2 {
    color: #2c5032;
    text-align: center;
  }
</style>
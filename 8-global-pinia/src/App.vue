<template>
  <div class="container">
    <div>
      <ProductLists />
    </div>
    <hr>
    <div>
      <CounterNumber />
    </div>
    <hr>
  <div>
    <h2>Contador</h2>
    <p> {{ counterStore.count }} x 2 = {{ counterStore.times2 }}</p>
    <button @click="counterStore.increment(1)">Increment</button>
  </div>
  </div>
</template>

<script setup lang="ts">
  import CounterNumber from '@/components/counter/CounterNumber.vue';
  import ProductLists from '@/components/shopping/ProductLists.vue';

  import { useCounterStore } from '@/store/counter';

  const counterStore = useCounterStore();


</script>

<style>
  .container {
        max-width: 700px;
        margin: 0 auto;
    }
  
  h2 {
    color: #0d9488;
    text-align: center;
  }
</style>
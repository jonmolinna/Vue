<template>
  <p>Watchers</p>
  <NotaWatchCompo />
  <br>
  <NotaWatchComposition />
  <br />
  <NotasWatch />
  <p>-------------------------------------</p>
  <p>With Pinia persist</p>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment(1)">Añadir</button>

  <p>With Local Storage</p>
  <h3>{{ count.count }}</h3>
  <button @click="count.increment(1)">Añadir</button>
</template>

<script lang="ts" setup>
  import { useStore } from '@/store/useStore';
  import { useCount } from './store/useCount';
  import NotasWatch from './components/NotasWatch.vue';
  import NotaWatchComposition from './components/NotaWatchComposition.vue';
  import NotaWatchCompo from './components/NotaWatchCompo.vue';

  const store = useStore();
  const count = useCount();
  count.init();
</script>

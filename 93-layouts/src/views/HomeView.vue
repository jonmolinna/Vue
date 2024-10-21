<template>
  <MainLayout>
    <!-- <template v-slot:main> -->
    <template #main>
      <h3>Main Content</h3>
    </template>
    <!-- <template v-slot:authentication> -->
    <template #authentication>
      <h3>Authentication Content</h3>
      <p>X position is: {{ x }}, Y position is: {{ y }}</p>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  // import {ref, onMounted, onUnmounted } from 'vue';
  import { useMouse } from '@/composables/useMouse';

  const {x, y } = useMouse();

  // const x = ref(0);
  // const y = ref(0);

  // function updated(event) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }

  // onMounted(() => window.addEventListener('mousemove', updated));
  // onUnmounted(() => window.removeEventListener('mousemove', updated));
</script>

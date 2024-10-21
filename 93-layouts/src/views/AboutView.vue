<template>
  <MainLayout>
    <template #main>
      <h3>Main Content</h3>
    </template>
    <template #authentication>
      <h3>Authentication Content</h3>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import { useMouse } from '@/composables/useMouse';

  const {x, y} = useMouse();

</script>

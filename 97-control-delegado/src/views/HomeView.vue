<template>
  <LazyLoad></LazyLoad>
  <br><br>
  <ParentComponent></ParentComponent>
  <br> <br>
  <ParentOptionApi></ParentOptionApi>
</template>

<script lang="ts" setup>
  import ParentComponent from '@/components/ParentComponent.vue';
  import ParentOptionApi from '@/components/ParentOptionApi.vue';
  import LazyLoad from '@/components/LazyLoad.vue';

</script>

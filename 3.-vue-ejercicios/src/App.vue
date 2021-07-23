<template>
  <div class="container">
    <div class="row">
      <div class="col mt-5">
        <CrudApi />
      </div>
    </div>
  </div>
</template>

<script>
import CrudApi from './components/CrudApi.vue';

export default {
  name: 'App',
  components: {
    CrudApi  
  }
}
</script>

<style>

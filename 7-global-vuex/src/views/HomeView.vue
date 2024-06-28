<template>
  <div class="home">
    <ShoppingProducts />
    <br>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ShoppingProducts from '@/components/shopping/ShoppingProducts.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    ShoppingProducts    
  },
});
</script>

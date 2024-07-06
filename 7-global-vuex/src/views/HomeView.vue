<template>
  <div class="home">
    <ProductHome />
    <br>
    <UsersHome />
    <br>
    <CounterNumber />
    <br>
    <ShoppingProducts />
    <br>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ShoppingProducts from '@/components/shopping/ShoppingProducts.vue';
import CounterNumber from '@/components/counter/CounterNumber.vue';
import UsersHome from '@/components/jsonplaceholder/UsersHome.vue';
import ProductHome from '@/components/productscrud/ProductHome.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    ShoppingProducts,
    CounterNumber,
    UsersHome,
    ProductHome
  },
});
</script>

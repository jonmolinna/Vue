<template>
  <div class="container">
    <h1>Carrito</h1>
    <hr>
    <div class="row">
      <Card 
        v-for="producto of productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
    <Carrito />
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Carrito from './components/Carrito.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    Card,
    Carrito
  },

  // Vue 2 es semilar a create
  // Se ejecuta una vez que lee la informacion
  setup(){
    const store = useStore()
    // onMounted Antes que ejecute el template ejecuta primero
    onMounted(() => {
      store.dispatch('fetchData')
    });

    // Accediendo al estado
    const productos = computed(() => store.state.productos);
    
    return {productos}

  }

}

/*
onMounted(() => {
      store.dispatch('fetchData', parametro)
});
*/
</script>

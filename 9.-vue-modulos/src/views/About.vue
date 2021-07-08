<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in tareasState" :key="index">{{item}}</h2>
    <h3>Numero: {{ numero }}</h3>
    <h3>{{ titulo }}</h3>
    <h3>Contador: {{ contador }}</h3>
    <button @click="aumentarContador(1)">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('tareas', ['tareasState', 'numero']),
    ...mapState(['titulo']),
    ...mapState('contador', ['contador']),
  },
  methods: {
    ...mapMutations('contador', ['aumentarContador']),
  }
}

</script>


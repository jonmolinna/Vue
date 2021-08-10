<template>
  <div id="app">
    <DeclarativeRendering />
    <hr>
    <Condicionales />
    <hr>
    <Methods />
    <hr>
    <Componente />
    <hr>
    <Atributos />
    <hr>
    <Computed />
    <hr>
  </div>
</template>

<script>
import DeclarativeRendering from'./components/DeclarativeRendering.vue';
import Condicionales from './components/Condicionales.vue';
import Methods from './components/Methods.vue';
import Componente from './components/Componente.vue';
import Atributos from './components/Atributos.vue';
import Computed from './components/Computed.vue';

export default {
  name: 'App',
  components: {
    DeclarativeRendering,
    Condicionales,
    Methods,
    Componente,
    Atributos,
    Computed
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

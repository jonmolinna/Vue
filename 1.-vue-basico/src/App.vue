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
    <ClassStyle />
    <hr>
    <ConditionalRendering />
    <hr>
    <ListRendering />
    <hr>
    <Eventos />
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
import ClassStyle from './components/ClassStyle.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import ListRendering from './components/ListRendering.vue';
import Eventos from './components/Eventos.vue';

export default {
  name: 'App',
  components: {
    DeclarativeRendering,
    Condicionales,
    Methods,
    Componente,
    Atributos,
    Computed,
    ClassStyle,
    ConditionalRendering,
    ListRendering,
    Eventos
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

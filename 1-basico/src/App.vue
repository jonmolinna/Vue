<template>
  <h3>7. Ejercicio</h3>
  <Contador />
  <br><br>
  <Tasks />
  <br><br>
  <TeacherForm />
  <hr>
  <h3>6. Form</h3>
  <ModelForm />
  <hr>
  <h3>5. Eventos</h3>
  <EventosButton />
  <hr>
  <h3>4. Directiva Class Bind</h3>
  <ClassBind />
  <hr>
  <h3>3. Directivas Selectivas</h3>
  <DirectivaSelectiva  />
  <hr>
  <h3>2. Contador Composition API</h3>
  <CounterComposition />
  <br><br>
  <h3>2. Contador Option API</h3>
  <CounterOption />
  <hr>
  <h3>1. Listado de Post:</h3>
  <PostContainer />
</template>

<script lang="ts" setup>
  import PostContainer from './components/PostContainer.vue';
  import CounterOption from './components/contador/CounterOption.vue';
  import CounterComposition from './components/contador/CounterComposition.vue';
  import DirectivaSelectiva from './components/directivas/DirectivaSelectiva.vue';
  import ClassBind from './components/directivas/ClassBind.vue'
  import EventosButton from './components/eventos/EventosButton.vue';
  import ModelForm from './components/form/ModelForm.vue';
  import TeacherForm from './components/ejercicio/Teacher.vue';
  import Tasks from './components/ejercicio/Tasks.vue';
  import Contador from './components/ejercicio/Contador.vue';

</script>

<style>

</style>

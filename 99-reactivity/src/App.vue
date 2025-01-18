<template>
  <div>
    <h2>Signal Solid</h2>
    <p>Count: {{ count() }}</p>
    <button @click="setCount(v => v + 1)">Increment</button>
    <button @click="setCount(0)">0</button>
    <button @click="setCount(v => v - 1)">Decrement</button>
  </div>
  <br>
  <div>
    <h2>Signal Angular</h2>
    <p>Count: {{ number() }}</p>
    <p>Double: {{ double() }}</p>
    <button @click="sumNumber()">Sumar</button>
    <button @click="resetNumber()">0</button>
    <button @click="restNumber()">Rester</button>
  </div>
  <br>
  <div>
    <h2>Reactive</h2>
    <p>Count: {{ number2.value }}</p>
    <button @click="handleSumar()">Sumar</button>
    <button @click="handleReset()">0</button>
    <button @click="handleRestar()">Restar</button>
  </div>
  <br>
  <div>
    <h2>Ref</h2>
    <p>Count: {{ number3.number }}</p>
    <button @click="() => number3.number++">Sumar</button>
    <button @click="() => number3.number = 0">0</button>
    <button @click="() => number3.number--">Restar</button>
  </div>
  <br>
  <div>
    <h2>Variables Globales plugins</h2>
    <p>Count: {{ $count() }}</p>
    <button @click="() => $hello()">SEND</button>
  </div>
</template>

<script lang="ts" setup>
  import { createSignal } from 'vue-signals/solid';
  import { computed, signal } from 'vue-signals/angular';
  import { reactive, ref } from "vue";

  // Signal Solid
  const [count, setCount] = createSignal(0);

  // Signal Angular
  const number = signal(0);
  const double = computed(() => number() * 2);

  const sumNumber = () => {
    number.update(number => number + 1)
  }

  const resetNumber =  () => {
    number.set(0);
  }

  const restNumber = () => {
    number.update(number => number - 1);
  };

  // Reactive
  // reactive nunca puede ser un valor primitivo
  const number2 = reactive({ value: 0 });

  const handleSumar = () => {
    number2.value = number2.value + 1;
  }

  const handleReset = () => {
    number2.value = 0;
  }

  const handleRestar = () => {
    number2.value--;
  }

  // Ref
  const number3 = ref({ number: 0 });

  // Plugins y Global


</script>

<style>
</style>

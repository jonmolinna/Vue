<template>
  <input type="text" v-model="note">
  <button @click="handleSubmit">Enviar</button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  let note = ref('');

  const handleSubmit = async () => {
    const response = await fetch('http://xxxxxxxxxxx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer XXXXXXXXXXXXXXX',
      },
      body: JSON.stringify({
        note: note.value,
      })
    });

    const res = await response.json();
  }


</script>
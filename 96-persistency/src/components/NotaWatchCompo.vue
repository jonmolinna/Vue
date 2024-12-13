<template>
    <p>Nota:</p>
    <input type="text" v-model="note" />

</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue';

    const note = ref("")

    watch(note, () => console.log("Valor Modificado: " + note.value));
</script>
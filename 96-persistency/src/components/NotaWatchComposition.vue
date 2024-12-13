<template>
    <p>Notas Composition Api:</p>
    <input type="text" v-model="note">
</template>

<script lang="ts">
    import { defineComponent, ref, watchEffect } from 'vue';

    export default defineComponent({
        setup() {
            const note = ref("");

            watchEffect(() => console.log("Effect Se ha modificado el valor: " + note.value));

            return {
                note,
            }
        }
    })
</script>
<template>
    <div>Ciclo de vida por Option Api</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CicleLife',
        data() {
            let number = 0;

            return {
                number
            }
        },
        methods: {
            // Metodos
        },
        created() {
            // Cuando se crea el component
            // Se ejecuta primero
            console.log('created');
        },
        mounted() {
            // Cuando el componente es montado
            console.log('mounted');
        },
        updated() {
            // Cuando el componente es actualizado
            console.log('Updated');
        },
        unmounted() {
            // Cuando el componente es destruido
            console.log('Destroyed');
        }
    });
</script>
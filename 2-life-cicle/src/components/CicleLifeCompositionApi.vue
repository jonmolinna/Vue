<template>
    <div>Ciclo de vida por Composition Api</div>
</template>

<script lang="ts" setup>
    import { onMounted, onUpdated } from 'vue';

    onMounted(() => {
        console.log('Mounted 2');
    })

    onUpdated(() => {
        console.log('Updated 2');
    })
</script>

<style scoped></style>
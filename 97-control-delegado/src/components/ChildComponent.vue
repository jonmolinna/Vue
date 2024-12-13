<template>
    <p>Porcentaje Completado: {{ percentage }}%</p>
</template>

<script lang="ts" setup>
    import { onMounted, ref, defineExpose } from 'vue';
    
    const percentage = ref(0);
    
    onMounted(() => {
        percentage.value = 24;
    })

    const recalculate = () => {
        // Actualizar el valor del porcentaje a travez del servicion
        percentage.value = 42
    }

    // Metodos que van a ser utilizados por otros componentes
    defineExpose({recalculate})

</script>

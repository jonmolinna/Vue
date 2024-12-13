<template>
    <ChildComponent ref="percentageComponent"></ChildComponent>
    <button @click="banco">Añadir Cuenta Bancaria</button>
    <br>
    <ChildCompositionApi ref="percentComposition"></ChildCompositionApi>
    <button @click="handleClick">Añadir</button>

</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import ChildComponent from './ChildComponent.vue';
    import ChildCompositionApi from './ChildCompositionApi.vue';

    const percentageComponent = ref(null);
    const banco = () => {
        // conectar con el servicio y subir la informacion
        percentageComponent.value.recalculate();
        console.log('Cuenta Subida');
    }

    const percentComposition = ref(null);
    const handleClick = () => {
        percentComposition.value.recalculate2();
    }


</script>
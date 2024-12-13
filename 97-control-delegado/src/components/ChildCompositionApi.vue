<template>
    <P>Porcentaje Completado: {{ percent }}%</P>
</template>

<script lang="ts">
    import {onMounted, ref, defineExpose, defineComponent } from 'vue';

    export default defineComponent({
        setup() {
            const percent = ref(0);
            const recalculate2 = () => percent.value = 42;
            onMounted(() => percent.value = 24);
            defineExpose({recalculate2})

            return {
                percent, recalculate2
            }
        }
    })
</script>
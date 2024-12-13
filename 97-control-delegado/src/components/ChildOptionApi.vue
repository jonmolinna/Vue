<template>
    <p>porcentaje Completado: {{  percent }}</p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                percent: 0
            }
        },
        methods: {
            recalculate2() {
                this.percent = 42
            }
        },
        mounted() {
            this.percent = 24;
        }
    })

</script>
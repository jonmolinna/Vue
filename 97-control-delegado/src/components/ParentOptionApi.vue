<template>
    <ChildOptionApi ref="percentageComponent"></ChildOptionApi>
    <button @click="banco">Añadir Cuenta Bancaria</button>
</template>

<script lang="ts">
    import ChildOptionApi from './ChildOptionApi.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components: {
            ChildOptionApi
        },
        methods: {
            banco() {
                // this.$refs.percentageComponent.recalculate2();  
            }
        }
    })
</script>
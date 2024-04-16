<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
    <button @click="resetCounter">Reset</button>
    <button @click="resCounter">Decrementar</button>
</template>

<!-- Option API -->
<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'CounterOption',
        components: {},
        data(){
            let counter = 0;
            return {
                counter
            }
        },
        methods: {
            addCounter(){
                this.counter++
            },
            resCounter() {
                this.counter--
            },
            resetCounter() {
                this.counter = 0;
            }
        }
    })
</script>

<style>
</style>
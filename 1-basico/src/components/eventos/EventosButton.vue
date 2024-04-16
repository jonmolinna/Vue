<template>
    <h4>A. Evento Click</h4>
    <div Class="event-click">
        <button v-on:click="resNumber()">-</button>
        <span>{{ number }}</span>
        <button @click="addNumber()">+</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'EventosButton',
        components: {},
        data() {
            let number = 0;
            return {
                number,
            }
        },
        methods: {
            addNumber() {
                this.number ++
            },
            resNumber() {
                this.number --
            }
        },
    })
</script>

<!-- <script lang="ts" setup>
    import { ref } from 'vue';

    let color = ref('#fff');
    const handleClick = () => color.value = '#ff0000';

</script> -->

<style>
    .event-click > span {
        display: inline-block;
        margin: 0 5px;
    }
</style>
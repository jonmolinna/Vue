<template>
    <section>
        <h3>Contador: {{ number }}</h3>
        <br>
        <button @click="resNumber(2)">-2</button>
        <button @click="resNumber(1)">-1</button>
        <button @click="resetNumber()">0</button>
        <button @click="sumNumber(1)">+1</button>
        <button @click="sumNumber(2)">+2</button>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'ContadorComponent',
        components: {},
        data() {
            let number = 0;

            return {
                number
            }
        },
        methods: {
            sumNumber(number: number) {
                this.number = this.number + number
            },
            resetNumber() {
                this.number = 0;
            },
            resNumber(number: number) {
                this.number = this.number - number
            }
        }
    })
</script>

<style></style>
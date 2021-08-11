<template>
    <div>
        <h2>Eventos</h2>
        <p>{{ contador }}</p>
        <button v-on:click="sumar">+</button>

        <form v-on:submit.prevent="onSubmit">
            <button>Enviar</button>
        </form>

        <input type="text" placeholder="Ingrese tu datos" v-on:keyup.enter="onSubmit">

    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0,
        };
    },
    methods: {
        sumar(){
            this.contador++
        },
        onSubmit(){
            alert('Enviando Mensaje');
        }
    }
};
</script>
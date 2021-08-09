<template>
    <div>
        <h2>Metodos (v-on y v-model)</h2>

        <p>{{ message }}</p>

        <button v-on:click="reverseMessage">Reverse Message </button>
        <br>
        <br>
        <input type="text" v-model="message2">
        <p>{{ message2 }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hola Vue',
            message2: '',
        };
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        },
    }
};
</script>
<template>
    <div>
        <h2>Atributos - Expresiones - (v-bind, v-on)</h2>

        <div v-bind:id="dynamicId">Tiene atributo</div>

        <button v-bind:disabled="isButtonDisabled">Enviar</button>

        <p>{{ number + 1 }}</p>
        <p>{{ ok? 'YES' : 'NO' }}</p>
        <p>{{ message.split('').reverse().join('') }}</p>

        <p>v-bind => vihincula atributos </p>
        <p>v-on => escuha eventos</p>

        <a v-bind:href="url" target="_blank">mas informacion</a>
        <br>
        <img v-bind:src="img" alt="">
        <br>
        <button v-on:click="Enviar">Enviar</button>

        <p>Shorthand</p>
        <p>v-bind:href = :href</p>
        <p>v-on:click = @click</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dynamicId: 'codigo-12',
            isButtonDisabled: true,
            number: 12,
            ok: false,
            message: 'jon dallas',
            url: 'https://vuejs.org/v2/guide/syntax.html#Interpolations',
            img: 'https://placeimg.com/100/100/animals'
        };
    },
    methods: {
        Enviar(){
            alert('Enviando Mensaje')
        }
    }
};
</script>
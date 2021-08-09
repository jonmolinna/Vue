<template>
    <div>
        <h2>Representacion Declarativa</h2>

        <h4>{{ message }}</h4>

        <span v-bind:title="message2">
            Hover your mouse over me for a few seconds to see my dynamically bound title
        </span>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: 'Hola Mundo, Primeros Pasos',
            message2: 'You loaded this page on ' + new Date().toLocaleString(),
        }
    }
};
</script>
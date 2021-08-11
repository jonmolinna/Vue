<template>
    <div>
        <h2>Estilos</h2>

        <p v-bind:class="{active: isActive}">Lorem, ipsum dolor.</p>
        <p class="static" v-bind:class="{active: isActive, 'text-danger': hasError}">Texto con estilos</p>

        <p v-bind:class="[activeClass, errorClass]">Lorem ipsum dolor sit.</p>
        <p v-bind:class="[isActive? activeClass: '', errorClass]">Lorem, ipsum dolor.</p>
        <p v-bind:class="[{ active: isActive}, errorClass]">Lorem ipsum dolor sit.</p>

        <h2>Estilos en Linea</h2>
        <p v-bind:style="styleObject">Lorem ipsum dolor sit.</p>
        <p v-bind:style="[styleObject, borderObject]">Lorem ipsum dolor sit.</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,

            activeClass: 'active',
            errorClass: 'text-danger',

            styleObject: {
                color: 'blue',
                fontSize: '20px'
            },
            borderObject: {
                border: '3px solid black',
                backgroundColor: 'brown',
            }
        };
    },
};
</script>

<style scope>
    .active {
        background-color: cadetblue;
    }
    .static {
        border: 3px solid black;
    }
    .text-danger {
        color: brown;
    }
</style>
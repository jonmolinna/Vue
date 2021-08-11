<template>
    <div>
        <h2>v-if - v-else - v-show</h2>
        <ol>
            <li>El uso de v-if y v-show son el mismo</li>
            <li>v-if elimina el elemento y v-show oculta el elemento</li>
        </ol>
        <div v-if="ok">
            <h4>Titulo 1</h4>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div v-if="numero > 10">
            <p>El numero es mayor a 10, y me ves</p>
        </div>
        <div v-else>
            <p>El numero es menor a 10, y me ves</p>
        </div>

        <div v-if="letra === 'A'">
            <p>Es la letra A</p>
        </div>
        <div v-else-if="letra === 'B'">
            <p>Es la letra B</p>
        </div>
        <div v-else>
            <p>No es la A ni la B</p>
        </div>

        <div v-show="ok">
            <h4>Titulo 1</h4>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            ok: true,
            numero: 17,
            letra: 'C'
        };
    },
};
</script>
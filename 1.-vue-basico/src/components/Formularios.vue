<template>
    <div>
        <h2>Formularios</h2>
        <input type="text" placeholder="Ingrese name" v-model="name">
        <p>tu nombre es: {{ name }}</p>

        <textarea cols="50" rows="5" placeholder="Ingrese Comentarios" v-model="comentario"></textarea>
        <p>Tus comentarios: {{ comentario }}</p>

        <input type="checkbox" id="check" v-model="check">
        <label for="check">{{ check }}</label>
        <br>
        <input type="checkbox" id="js" value="JavaScript Vanilla" v-model="cursos">
        <label for="js">JavaScript Vanilla</label>
        <input type="checkbox" id="react" value="React" v-model="cursos">
        <label for="react">React</label>
        <input type="checkbox" id="vue" value="Vue" v-model="cursos">
        <label for="vue">Vue</label>
        <input type="checkbox" id="angular" value="Angular" v-model="cursos">
        <label for="angular">Angular</label>
        <p>Cursos elegidos son: {{ cursos }}</p>

        <input type="radio" id="masculino" value="Masculino" v-model="genero">
        <label for="masculino">Masculino</label>
        <input type="radio" id="femenino" value="Femenino" v-model="genero">
        <label for="femenino">Femenino</label>
        <p>Tu genero es: {{ genero }}</p>

        <select v-model="carrera">
            <option disabled value="">Seleccione Carrera</option>
            <option value="Negocios">Negocios</option>
            <option value="Diseño">Diseño</option>
            <option value="Informatica">Informatica</option>
        </select>
        <p>Eligiste la carrera de: {{ carrera }}</p>

        <select v-model="region">
            <option disabled value="">Seleccione tu region</option>
            <option :value="region.name" v-for="region of regiones" :key="region.id">
                {{ region.name }}
            </option>
        </select>
        <p>Tu region es: {{ region }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            comentario: "",
            check: false,
            cursos: [],
            genero: "",
            carrera: "",
            regiones: [
                {id: 1, name: "Lima"},
                {id: 2, name: "Trujillo"},
                {id: 3, name: "Piura"},
            ],
            region: ""
        };
    },
};
</script>
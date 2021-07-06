<template>
    <div class="mt-5">
        <h2>Formularios</h2>

        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>Mínimo 3 caracteres</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="lenguajes"></b-form-radio-group>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="frutas"></b-form-checkbox-group>
                </b-col>
            </b-row>
        </form>

        <p>texto: {{ texto }}</p>
        <p>Animal: {{select }}</p>
        <p>Lenguaje: {{ radio }}</p>
        <p>Frutas: {{ check }}</p>

    </div>
</template>

<script>
export default {
    name: 'Formulario',
    data(){
        return {
            texto: '',
            select: null,
            animales: [
                {value: null, text: 'Seleccione un Animal'},
                {value: 'perro', text: 'Perro'},
                {value: 'gato', text: 'Gato'},
                {value: 'pato', text: 'Pato'}
            ],
            radio: null,
            lenguajes: [
                {value: 'react', text: "React"},
                {value: 'angular', text: "Angular"},
                {value: 'vue', text: "Vue"}
            ],
            check: [],
            frutas: [
                {value: 'mango', text: "Mango"},
                {value: 'manzana', text: "Manzana"},
                {value: 'platano', text: "Platano"}
            ]
        }
    },
    computed: { // Solo retorna verdadero o falso
        comprobar(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>
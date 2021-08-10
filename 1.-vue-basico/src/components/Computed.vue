<template>
    <div>
        <h2>Computed Properties and Watchers</h2>
        <p>Computed Properties</p>
        <ul>
            <li>Son propiedades calculadas.</li>
            <li>Son funciones que siempre retornan un valor calculado o modificado del estado.</li>
            <li>Las funciones Computed se almacenan en cache en funcion de sus dependencias reactivas.</li>
            <li>Una Computed Properties solo se reevaluara cuando sus dependencias reactivas hayan cambiado.</li>
            <li>Sirven para almacenar valores grandes calculadas.</li>
        </ul>
        <p>Watchers</p>
        <ul>
            <li>Los Watchers reaccionan a los cambios de datos a travez de la opcion vigilada.</li>
            <li>Un watcher es básicamente una función que se ejecuta automáticamente cuando la propiedad observada cambia.</li>
            <li>Los watchers se necesitan para hacer algo mas complejo como llamadas de https, guardar datos en un localstorage.</li>
        </ul>

        <p>Ejemplos de Computed Properties</p>
        <p>original mensaje: {{ message }}</p>
        <p>Reversed message: {{ message.split('').reverse().join('') }}</p>
        <p>Computed reversed message: {{ reversedMessage }}</p>
        <p>FullName: {{ fullName }}</p>
        <p>Precio Total: {{ precioTotal }}</p>
        <br>

        <p>Ejemplos de Watchers</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello',
            firstName: 'Jon',
            lastName: 'Dallas',
            precio: 12,
            cantidad: 10,
            actorId: null,
            movies: [],
        };
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        },
        fullName: function(){
            return this.firstName + ' ' + this.lastName
        },
        precioTotal: function(){
            return this.precio * this.cantidad;
        }
    },
    methods: {
        getMovies(){
            //axios.get(`movies/actor/${this.actorId}`)
            //    .then(res => {
            //        this.movies = res.data;
            //    });
        },
    },
    watch: {
        actorId(val){
            if(val){
                this.getMovies();
                // Cuando cambie el actorId => se ejecutara la funcion getMovies
            }   
        }
    },
};
</script>
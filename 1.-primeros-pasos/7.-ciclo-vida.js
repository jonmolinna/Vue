const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Soy ciclo de vida de vue'
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        // Al crear los metodos, observadores y eventos, pero aun no accede al DOM.
        // Aun no se puede acceder a 'el'
        console.log('created')
    },
    beforeMount(){
        // se ejecuta antes de insertar al DOM
        console.log('beforeMount');
    },
    mounted(){
        // se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate(){
        // Al detectar un cambio
        console.log('beforeUpdate')
    },
    updated(){
        // Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        // Antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed(){
        // se destruye toda la instancia
        console.log('destroyed')
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    }
});
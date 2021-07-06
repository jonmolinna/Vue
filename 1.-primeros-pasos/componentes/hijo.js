Vue.component('hijo', {
    template: //html
    `
        <div class="py-5 bg-success">
            <h4>Componente Hijo: {{ numero }}</h4>
            <h5>{{ numero2 }}</h5>
            <h5>Nombre: {{ nombre }}</h5>
        </div>
    `,
    props: ["numero", "numero2"],
    data(){
        return {
            nombre: 'Dallas'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
});
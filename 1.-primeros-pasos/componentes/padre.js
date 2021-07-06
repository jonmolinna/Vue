Vue.component('padre', {
    template: //html 
    `
        <div class="p-5 bg-dark text-white">
            <h2>Componente Padre: {{numeroPadre}}</h2>
            <button @click="numeroPadre++" class="btn btn-danger">+</button>
            <hr />
            {{ nombrePadre }}
            <hijo
                numero="5"
                :numero2=numeroPadre
                @nombreHijo="nombrePadre = $event"
            >
            </hijo>
        </div>
    `,
    data(){
        return {
            numeroPadre: 0,
            nombrePadre: '',
        }
    }
});
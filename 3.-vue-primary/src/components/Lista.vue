<template>
    <div>
        <ul class="list-group list-group-numbered">
            <li 
                class="list-group-item d-flex justify-content-between align-items-start" 
                v-for="(item, index) of arrayOrdenado" v-bind:key="item.name"
                @click="aumentar(index)"
            >
                <div class="ms-2 me-auto">
                    {{ item.nombre }}
                </div>
                <span class="badge bg-primary rounded-pill">{{ item.cantidad }}</span>
            </li>
        </ul>
        <button class="btn btn-success btn-block" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'Lista',
        computed: {
            ...mapState(['frutas']),
            arrayOrdenado(state){
                return state.frutas.sort((a,b) => b.cantidad - a.cantidad)
            }
        },
        methods: {
            ...mapMutations(['aumentar', 'reiniciar'])
        }
    }
</script>
<template>
    <div>
        <h3>Selects Anidados</h3>
        <h4>Regiones de Tumbes y Tacna</h4>
        <SelectList 
            :lugares="regiones"
            name="Region"
            :handleChange="handleChangeRegion"
        />
        <SelectList 
            v-if="provincias"
            :lugares="provincias"
            name="Provincia"
            :handleChange="handleChangeProvincia"
        />
        <SelectList 
            v-if="distritos"
            :lugares="distritos"
            name="Distrito"
            :handleChange="handleChangeDistrito"
        />
        <pre>
            <code>
                {{region}} - {{provincia}} - {{distrito}}
            </code>
        </pre>
    </div>
</template>

<script>
import SelectList from './SelectList.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        SelectList
    },
    data(){
        return {
            region: '',
            provincia: '',
            distrito: '',
        }   
    },
    methods: {
        ...mapActions(['getRegiones', 'getRegion', 'getProvincia']),
        handleChangeRegion(e){
            let idRegion = e.target.value;
            let nameRegion = this.regiones.find(element => element.id === idRegion);
            this.region = nameRegion.name;
            this.getRegion(idRegion);
        },
        handleChangeProvincia(e){
            let idProvincia = e.target.value;
            let nameProvincia = this.provincias.find(element => element.id === idProvincia);
            this.provincia = nameProvincia.name
            this.getProvincia(idProvincia)
        },
        handleChangeDistrito(e){
            let idDistrito = e.target.value;
            let nameDistrito = this.distritos.find(element => element.id === idDistrito);
            this.distrito = nameDistrito.name;
        },
    },
    mounted(){
        this.getRegiones();
    },
    computed: {
        ...mapGetters(['regiones', 'provincias', 'distritos']),
    },
};
</script>

<style lang="scss" scoped>

</style>
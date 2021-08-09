<template>
    <div class="card">
        <div class="card-body">
            <form @submit="addCurso">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ingrese Curso" v-model="name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ingrese Carrera" v-model="carrera">
                </div>
                <div class="form-group">
                    <button class="btn btn-success form-control">{{id? 'Editar' : 'Guardar'}}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data(){
        return {
            name: "",
            carrera: "",
            id: null
        }
    },
    methods: {
        ...mapActions(['addAreaAction', 'updateAreaAction']),

        addCurso(e){
            e.preventDefault();

            if(!this.name || !this.carrera) return alert("Ingrese todos los campos");

            if(this.id){
                let cursoEdit = {
                    id: this.id,
                    name: this.name,
                    carrera: this.carrera,
                }
                this.updateAreaAction(cursoEdit);
            } else {
                let newCurso = {
                    id: new Date().getTime(),
                    name: this.name,
                    carrera: this.carrera,
                }
                this.addAreaAction(newCurso)
            }
            this.id = null;            
            this.name = "";
            this.carrera = "";
        }
    },
    computed: {
        ...mapGetters(['cursoEdit']),
    },
    watch: {
        cursoEdit: function(){
            this.name = this.cursoEdit.name;
            this.carrera = this.cursoEdit.carrera;
            this.id = this.cursoEdit.id;
        }
    },
};
</script>
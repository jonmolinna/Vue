<template>
    <div class="card">
        <div class="card-body">
            <form @submit="addCurso">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ingrese Curso" v-model="curso">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ingrese Carrera" v-model="carrera">
                </div>
                <div class="form-group">
                    <button class="btn btn-success form-control">{{id? "Actualizar" : "Guardar"}}</button>
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
            curso: "",
            carrera: "",
            id: null,
        }
    },
    methods: {
        ...mapActions(['addCursoAction', 'updateCursoAction']),

        addCurso(e){
            e.preventDefault();
            if(this.id){
                let updateCurso = {
                    id: this.id,
                    curso: this.curso,
                    carrera: this.carrera,
                }
                //console.log(updateCurso)
                this.updateCursoAction(updateCurso)
                this.id = null;
                this.curso = "";
                this.carrera = "";

            } else {
                let newCurso = {
                    curso: this.curso,
                    carrera: this.carrera
                }

                this.addCursoAction(newCurso)
                this.curso = "";
                this.carrera = "";

            }
            
        },

    },
    computed: {
        ...mapGetters(['getCurso']),
    },
    watch: {
        getCurso: function(){
            this.carrera = this.getCurso.carrera,
            this.curso = this.getCurso.curso,
            this.id = this.getCurso.id
        }
    }
    
};
</script>
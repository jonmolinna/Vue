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
                    <button class="btn btn-success form-control">Enviar</button>
                </div>
            </form> 
        </div> 
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            curso: "",
            carrera: "",
        }
    },
    methods: {
        ...mapActions(['addCursoAction']),

        addCurso(e){
            e.preventDefault();
            
            let newCurso = {
                curso: this.curso,
                carrera: this.carrera
            }

            this.addCursoAction(newCurso)
            this.curso = "";
            this.carrera = "";
        }

    },
};
</script>
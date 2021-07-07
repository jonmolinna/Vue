<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">

        <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip
              class="ma-2 ml-0"
              color="pink"
              label
              text-color="white"
            >
            <v-icon left>
              mdi-label
            </v-icon>
              {{item.titulo}}
            </v-chip>
            <p>
              {{item.description}}
            </p>
            <v-btn color="success mr-2" @click="editar(index)">Editar</v-btn>
            <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" v-if="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo" v-model="titulo"></v-text-field>
            <v-textarea label="Descripción" v-model="description"></v-textarea>
            <v-btn class="success" block type="submit">Agregar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo" v-model="titulo"></v-text-field>
            <v-textarea label="Descripción" v-model="description"></v-textarea>
            <v-btn class="error" block type="submit">Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-col>

    </v-row>

    <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>

  </v-container>
</template>

<script>
export default {
  name: 'TareasCrud',
  data() {
    return {
      listaTareas: [
        {id: 1, titulo: 'Titulo tarea #1', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'},
        {id: 2, titulo: 'Titulo tarea #2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'},
      ],
      titulo: '',
      description: '',
      snackbar: false,
      mensaje: '',
      formAgregar: true,
      indexTarea: null,
    }
  },
  methods: {
    agregarTarea(){
      if(this.titulo === '' || this.description === ''){
        this.snackbar = true
        this.mensaje = 'Llene todos los campos'
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          description: this.description
        })
        this.titulo = '';
        this.description = '';
        this.snackbar = true
        this.mensaje = 'Tarea agregada'
      }
    },
    eliminarTarea(id){
      this.listaTareas = this.listaTareas.filter(element => element.id != id);
    },
    editar(index){
      this.formAgregar = false;
      this.titulo = this.listaTareas[index].titulo;
      this.description = this.listaTareas[index].description;
      this.indexTarea = index;
    },
    editarTarea(){
      this.listaTareas[this.indexTarea].titulo = this.titulo;
      this.listaTareas[this.indexTarea].description = this.description;
      this.formAgregar = true
      this.titulo = '';
      this.description = '';
      this.snackbar = true
      this.mensaje = 'Tarea Editada'
    }
  }

}
</script>

<style>

</style>
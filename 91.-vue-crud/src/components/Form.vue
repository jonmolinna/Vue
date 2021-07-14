<template>
  <div class="card p-4">
      <form @submit.prevent="addProducto" v-if="!update">
          <div class="mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Ingrese Nombre"
                v-model="name"
              >
          </div>
          <div class="mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Ingrese Precio"
                v-model="precio"
               >
          </div>
          <div class="mb-3">
              <input 
                type="number" 
                class="form-control" 
                placeholder="Ingrese Stock"
                v-model="stock"
               >
          </div>
          <div class="mb-3">
              <select 
                class="form-control"
                v-model="categoria" 
              >
                  <option value="">Seleccione Categoria</option>
                  <option value="Carne">Carne</option>
                  <option value="Verduras">Verduras</option>
                  <option value="Abarrotes">Abarrotes</option>
                  <option value="Golosinas">Golosinas</option>
                  <option value="Frutas">Frutas</option>
              </select>
          </div>
          <div class="d-grid">
              <button 
                class="btn btn-success form-control" 
                >
                    Guardar
                </button>
          </div>
          
      </form>

      <form @submit.prevent="updateProducto" v-if="update">
          <div class="mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Ingrese Nombre"
                v-model="$store.state.nameProduct"
              >
          </div>
          <div class="mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Ingrese Precio"
                v-model="$store.state.precioProduct"
               >
          </div>
          <div class="mb-3">
              <input 
                type="number" 
                class="form-control" 
                placeholder="Ingrese Stock"
                v-model="$store.state.stockProduct"
               >
          </div>
          <div class="mb-3">
              <select 
                class="form-control"
                v-model="$store.state.categoriaProduct" 
              >
                  <option value="">Seleccione Categoria</option>
                  <option value="Carne">Carne</option>
                  <option value="Verduras">Verduras</option>
                  <option value="Abarrotes">Abarrotes</option>
                  <option value="Golosinas">Golosinas</option>
                  <option value="Frutas">Frutas</option>
              </select>
          </div>
          <div class="d-grid">
              <button 
                class="btn btn-success form-control" 
                >
                    Actualizar
                </button>
          </div>
          
      </form>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Form',
    data(){
        return {
            name: '',
            precio: '',
            stock: '',
            categoria: '',
        }
    },
    computed: {
        ...mapState(['update', 'idProduct', 'nameProduct', 'precioProduct', 'stockProduct', 'categoriaProduct']),
        
    },
    methods: {
        ...mapActions(['addProductActions', 'updateProductAction']),

        addProducto(){
            let id = new Date().getTime()

            if(!this.name){
                alert('Ingrese Nombre del Producto')
            }
            else if(!this.precio){
                alert('Ingrese Precio del Producto')
            }
            else if(!this.stock){
                alert('Ingrese Stock del Producto')
            }
            else if(!this.categoria){
                alert('Ingrese Categoria del Producto')
            } else {
                const nuevoProducto = {
                id: id,
                name: this.name,
                precio: this.precio,
                stock: Number(this.stock),
                categoria: this.categoria,
            }

            this.addProductActions(nuevoProducto);
            this.limpiezaForm();

            }
 
        },

        updateProducto(){
            let updateProducto = {
                id: this.idProduct,
                name: this.nameProduct,
                precio: this.precioProduct,
                stock: this.stockProduct,
                categoria: this.categoriaProduct
            };

            this.updateProductAction(updateProducto);
        },

        limpiezaForm(){
            this.name = "";
            this.precio= "";
            this.stock = "";
            this.categoria = "";
        },

    }
}
</script>
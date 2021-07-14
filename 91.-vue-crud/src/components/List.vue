<template>
    <table class=" mt-4 table table-dark table-striped" >
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Categoria</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in productos" :key="item.id">
                <td>{{item.name }}</td>
                <td>{{ item.precio }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.categoria }}</td>
                <td>
                    <span class="material-icons-outlined" @click="deleteProduct(item.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                    </span>
                    <span class="material-icons-outlined" @click="updateAction(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
                    </span>
                </td>
            </tr>
            
        </tbody>
    </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'List',
    computed: {
        ...mapState(['productos'])
    },
    methods: {
        ...mapActions(['deleteProductActions', 'updateAction']),

        deleteProduct(id){
            let eliminar = window.confirm('¿Estas Seguro de Eliminar el Producto?');
            if(eliminar === true){
                this.deleteProductActions(id)
            }
            
            console.log(eliminar)
        }
    }

}
</script>
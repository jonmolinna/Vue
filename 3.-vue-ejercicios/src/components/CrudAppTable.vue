<template>
    <table class="table table-striped table-dark table-hover">
        <thead>
            <tr>
                <th scope="col">Curso</th>
                <th scope="col">Carrera</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="areas.length === 0" >
                <td colspan="3">No hay Cursos.</td>
            </tr>
            <CrudAppTableRow 
                v-else v-for="curso in areas"
                v-bind:key="curso.id"
                :curso="curso"
            /> 
        </tbody>
    </table>
    
</template>

<script>
import CrudAppTableRow from './CrudAppTableRow.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        CrudAppTableRow
    },
    computed: {
        ...mapGetters(['areas'])
    }
};
</script>
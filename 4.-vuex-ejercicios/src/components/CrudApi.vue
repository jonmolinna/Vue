<template>
    <div>
        <h3>CRUD API</h3>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <CrudForm />
            </div>
            <div class="col-12 col-md-6">
                <CrudTable />
            </div>
        </div>        
    </div>
</template>

<script>
import CrudForm from './CrudForm.vue';
import CrudTable from './CrudTable.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        CrudForm,
        CrudTable
    },
    methods: {
        ...mapActions(['getCursos']),
    },
    created(){
        this.getCursos();
    }
};
</script>
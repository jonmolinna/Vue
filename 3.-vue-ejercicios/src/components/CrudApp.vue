<template>
    <div>
        <h3>CRUD APP</h3>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <CrudAppForm />
            </div>
            <div class="col-12 col-md-6">
                <CrudAppTable />
            </div>
        </div>        
    </div>
</template>

<script>
import CrudAppForm from './CrudAppForm.vue';
import CrudAppTable from './CrudAppTable.vue'

export default {
    components: {
        CrudAppForm,
        CrudAppTable
    }
};
</script>
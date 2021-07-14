<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-ms-12 col-md-6">
                <Form />
            </div>
            <div class="col-ms-12 col-md-6">
                <List />
            </div>
        </div>
    </div>
</template>

<script>
import Form from './Form.vue';
import List from './List.vue';

export default {
    name: 'Home',
    components: {
        Form,
        List,
    }
}
</script>

<style scoped>
    .none {
        display: none;
    }
</style>
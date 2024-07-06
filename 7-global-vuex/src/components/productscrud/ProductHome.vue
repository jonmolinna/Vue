<template>
    <h3>Example 4</h3>
    <div class="container">
        <ProductForm />
        <ProductList /> 
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ProductForm from './ProductForm.vue';
    import ProductList from './ProductList.vue';

    export default defineComponent({
        name: 'ProductHome',
        components: {
            ProductForm,
            ProductList
        }
    })
</script>

<style scoped>
    .container {
        max-width: 700px;
        margin: 0 auto;
    }
</style>
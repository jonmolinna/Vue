<template>
    <h3>Example 1</h3>
    <ProductLists />
    <CartDetails />
    <CartLists />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ProductLists from './ProductLists.vue';
    import CartDetails from './CartDetails.vue';
    import CartLists from './CartLists.vue';

    export default defineComponent({
        name: 'ShoppingProducts',
        components: {
            ProductLists,
            CartDetails,
            CartLists
        },
        // methods: {
        //     ...mapMutations('shoppingMod', ['addProducts']),
        // },
    })

</script>
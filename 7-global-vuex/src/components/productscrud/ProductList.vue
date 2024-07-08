<template>
    <div class="grid">
        <div v-for="product of products" :key="product.id" class="card">
            <h2 class="card_title">{{product.name}}</h2>
            <span class="card_span">{{product.description}}</span>
            <span class="card_span">{{product.category}}</span>
            <span class="card_span">S/ {{product.price}}</span>
            <div class="card_btns">
                <button class="card_btn" @click="findProductById(product.id)">Update</button>
                <button class="card_btn" @click="deleteProduct(product.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import productInterface from '@/interface/product.iterface';
    import { computed, Ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const products: Ref<productInterface[]> = computed(() => store.state.productModule.products) 
    const deleteProduct = (id: number) => store.commit('deleteProduct', id);
    const findProductById = (product: number) => store.commit('findProductById', product);

</script>

<style scoped>
 .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        padding: 10px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card_title {
        color: #047857;
        font-size: 1rem;
        font-weight: 700;
    }

    .card_span {
        display: block;
        font-size: .9rem;
        color: #525252;
        margin-bottom: 5px;
    }

    .card_btns {
        margin-top: 14px;
        display: flex;
        justify-content: space-around;
    }

    .card_btn {
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
    }

    .card_btn:first-child {
        background-color: #047857;
    }

    .card_btn:last-child {
        background-color: #be123c;
    }
</style>
<template>
    <div class="container">
        <div class="grid">
            <div class="card" v-for="(product, index) in products" :key="index">
                <h3>{{product.name}}</h3>
                <div>
                    <p>{{ product.description  }}</p>
                    <p>S/ {{ product.price  }}</p>
                    <button class="card__btn" @click="addProductToCart(product)">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import productInterface from '@/interface/product.iterface';
    import { Ref, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const products: Ref<productInterface[]> = computed(() => store.state.shopping.products);
    const addProductToCart = (product: productInterface) => store.commit('addProductToCart', product);

</script>

<style scoped>
    .container {
        max-width: 700px;
        margin: 0 auto;
    }

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

    .card h3 {
        color: #0e7490;
    }

    .card__btn {
        padding: 9px 40px;
        background-color: #059669;
        color: white;
        border: none;
        cursor: pointer;
    }

    .card__btn:hover {
        background-color: #065f46;
    }
</style>
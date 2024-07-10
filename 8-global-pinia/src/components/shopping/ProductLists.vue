<template>
    <div>
        <h2>Example 2</h2>
        <div class="grid">
            <div class="card" v-for="product in products" :key="product.id">
                <h3>{{ product.name }}</h3>
                <div>
                    <p>{{ product.description }}</p>
                    <p>S/ {{ product.price }}</p>
                    <button class="card__btn">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useShopping } from '@/store/shopping';

    const useStore = useShopping();

    const products = useStore.products;
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
        text-align: center;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card h3 {
        color: #0e7490;
    }

    .card p {
        color: #374151;
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
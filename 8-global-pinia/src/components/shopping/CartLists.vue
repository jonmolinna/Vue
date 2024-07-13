<template>
     <div class="container">
        <div class="grid">
            <div class="card" v-for="cart in carts" :key="cart.id">
                <h3>{{ cart.name }}</h3>
                <div>
                    <p>{{ cart.description }}</p>
                    <p>S/ {{ cart.price }}</p>
                    <div class="card__quantity">
                        <div>
                            <button class="btn__circle" @click="restQuantityCart(cart.id)" >-</button>
                            {{ cart.quantity }}
                            <button class="btn__circle" @click="sumQuantityCart(cart.id)" >+</button>
                        </div>
                        <button class="card__btn" @click="deleteCart(cart.id)">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useShopping } from '@/store/shopping';
    import { storeToRefs } from 'pinia';

    const store = useShopping();
    const { carts } = storeToRefs(store);
    const { deleteCart, sumQuantityCart, restQuantityCart } = store;

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
        text-align: center;
    }

    .card p {
        color: #374151;
    }

    .card__btn {
        padding: 9px 20px;
        background-color: #dc2626;
        color: white;
        border: none;
        cursor: pointer;
    }

    .card__btn:hover {
        background-color: #7f1d1d;
    }

    .card__quantity {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }

    .btn__circle {
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid #be185d;
        background-color: white;
        cursor: pointer;
    }
</style>
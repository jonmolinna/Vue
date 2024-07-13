<template>
    <div class="grid">
            <div class="card">
                <h3>Details Sales</h3>
                <p>Quantity Products: <span>{{ getQuantityProductCart }}</span></p>
                <p>Sales Amount: <span>{{ getQuantitySale }}</span></p>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { useShopping } from '@/store/shopping';
    import { storeToRefs } from 'pinia';

    const store = useShopping();

    const { getQuantityProductCart, getQuantitySale } = storeToRefs(store);

</script>

<style scoped>
     .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
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

    .card span {
        font-weight: 700;
    }
</style>
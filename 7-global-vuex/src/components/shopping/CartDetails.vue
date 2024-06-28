<template>
    <div class="container">
        <div class="grid">
            <div class="card">
                <h3>Details Sales</h3>
                <p>Quantity Products: <span>{{ getQuantityProducts }}</span></p>
                <p>Sales Amount: <span>{{ getQuantitySales }}</span></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, computed } from 'vue';
    import { useStore } from 'vuex';


    const store = useStore();

    const getQuantityProducts: Ref<number> = computed(() => store.getters.getQuantityProducts);
    const getQuantitySales : Ref<number> = computed(() => store.getters.getQuantitySales); 

</script>

<style scoped>
.container {
        max-width: 700px;
        margin: 0 auto;
    }

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
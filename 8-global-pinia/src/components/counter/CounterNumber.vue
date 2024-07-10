<template>
    <div>
        <h2>Example 1</h2>
        <div class="number">
            <p> Number: {{ store.number }}</p>
            <div>
                <button class="number__btn" @click="store.restNumber(2)">-2</button>
                <button class="number__btn" @click="store.restNumber(1)">-1</button>
                <button class="number__btn" @click="store.resetNumber()">0</button>
                <button class="number__btn" @click="store.sumNumber(1)">+1</button>
                <button class="number__btn" @click="store.sumNumber(2)">+2</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useCounterNumberStore } from '@/store/counterNumber';

    const store = useCounterNumberStore();
</script>

<style scoped>
.number > p {
        font-size: 1.4rem;
        font-weight: 700;
        color: #262626;
    }

    .number__btn {
        color: white;
        background-color: #0d9488;
        font-weight: 500;
        border-radius: 30%;
        font-size: 0.9rem;
        border: none;
        cursor: pointer;
        text-align: center;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    .number__btn:hover {
        background-color: #115e59;
    }
</style>
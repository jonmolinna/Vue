<template>
    <div>
        <h3>Example 2</h3>
        <div class="number">
            <p>Number: {{  number  }}</p>
            <div>
                <button class="number__btn" @click="restNumber(2)">-2</button>
                <button class="number__btn" @click="restNumber(1)">-1</button>
                <button class="number__btn" @click="resetNumber">0</button>
                <button class="number__btn" @click="sumNumber(1)">+1</button>
                <button class="number__btn" @click="sumNumber(2)">+2</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const number: Ref<number> = computed(() => store.state.numberModule.number);

    const sumNumber = (num: number) => store.commit('sumNumber', num)
    const resetNumber = () => store.commit('resetNumber');
    const restNumber = (num: number) => store.commit('restNumber', num);
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
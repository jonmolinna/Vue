<template>
    <div class="card">
        <h3>{{ props.content.name }}</h3>
        <p>{{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';

    const props = defineProps(['content'])
</script>

<style scoped>
    .card {
        border: 4px solid #8f8f8e;
        padding: 10px;
        display: flex;
        flex-direction: column;
        width: 200px;
        margin: 10px;
    }
</style>
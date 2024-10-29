<template>
    <div class="list">
        <h3>{{ props.content.name }}</h3>
        <p>{{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';
    const props = defineProps(['content']);

</script>

<style scoped>
    .list {
        border-radius: 10px;
        padding: 5px;
        display: flex;
        width: 100%;
        margin: 10px;
        justify-content: space-around
    }
</style>
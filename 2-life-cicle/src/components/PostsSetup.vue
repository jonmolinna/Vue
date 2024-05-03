<template>
    <div class="post">
        <h3>{{ props.name }}</h3>
        <p>{{ props.price }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Send</button>
    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref, defineProps, defineEmits } from 'vue';

    let message : Ref<string> = ref("");

    const props = defineProps({
        'name': String, 
        'price': Number,
    });

    const emit = defineEmits(['showAlert']);

    const handleClick = () => {
        emit('showAlert', message.value)
    }


</script>

<style scoped>
.post {
        width: 300px;
        height: 100px;
        background-color: antiquewhite;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>
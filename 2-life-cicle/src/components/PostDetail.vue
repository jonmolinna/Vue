<template>
    <div class="post">
        <h3>{{ props.name }}</h3>
        <p>Precio: {{ props.price }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Send</button>
    </div>
</template>

<script lang="ts">
    import { Ref, ref, defineComponent } from 'vue';

    export default defineComponent({
        name: 'PostDetail',
        // Comunicacion descendiente
        props: {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: false,
                default: 0,
            }
        },
        // Comunicacion ascendiente
        emits: ["showAlert"],
        setup(props, { emit }) {
            const handleClick = () => {
                emit('showAlert', message.value)
            }

            let message: Ref<string> = ref('');

            return {
                props,
                handleClick,
                message,
            }
        }
    })
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
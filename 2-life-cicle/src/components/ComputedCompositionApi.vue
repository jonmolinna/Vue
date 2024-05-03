<template>
    <div>
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed, Ref } from 'vue';

    let message: Ref<string> = ref('');
    const reverse = computed(() => message.value.split('').reverse().join(''))
    
</script>

<!-- <script lang="ts">
    import { defineComponent, ref, computed, Ref } from 'vue';

    export default defineComponent({
        name: 'ComputedCompositionApi',
        setup() {
            let message: Ref<string> = ref('');
            const reverse = computed(() => message.value.split('').reverse().join(''))

            return {
                message,
                reverse,
            }
        }
    })
</script> -->

<style scoped></style>
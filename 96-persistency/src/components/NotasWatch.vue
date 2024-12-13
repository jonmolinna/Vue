<template>
    <p>Notas:</p>
    <input type="text" v-model="note">
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                note: "",
            }
        },
        watch: {
            note(value, oldValue) {
                console.log("old Value: " + oldValue + " new Value: " + value);
                localStorage.setItem('notess', value)
            }
        }
    })
</script>
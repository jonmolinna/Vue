<template>
    <div v-bind:class="{'danger': hasError}">
        <p>El mensaje se ha enviado satisfactoriamente.</p>
    </div>
    <div :class="{'danger': hasError}">
        <p>This is a message</p>
    </div>
    <div :style="{backgroundColor: '#ccc', color: '#000'}">
        <p>Lorem, ipsum dolor.</p>
    </div>
</template>

<!-- <script lang="ts">
    import { defineComponent} from 'vue';

    export default defineComponent({
        name: 'ClassBind',
        setup(){
            let hasError = true;

            return {
                hasError,
            }
        }
    })
</script> -->

<!-- <script lang="ts" setup>

    let hasError = true;

</script> -->

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ClassBind',
        data(){
            return {
                hasError: true
            }
        }
    })
</script>

<style>
    .danger {
        color: red;
    }
</style>
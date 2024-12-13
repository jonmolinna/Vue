<template>
    <!-- <img v-lazy="{
        src: 'https://picsum.photos/seed/picsum/200/300',
        loading: 'loading.png',
        error: 'loading.png',
        delay: 500
    }"
    /> -->
    <br><br>
    <img v-lazy="{src: lazyOption.src, lifecycle: lazyOption.lifecycle, delay: lazyOption.delay}" lazy="loading">

</template>

<script lang="ts" setup>
    import { ref, VNode } from 'vue';

    const lazyOption = ref({
        src: 'https://picsum.photos/seed/picsum/200/300',
        delay: 500,
        lifecycle: {
            loading: (el: VNode) => {
                console.log('loading image ...', el)
            },
            error: (el: VNode) => {
                console.log('error loading ...', el)
            },
            loaded: (el: VNode) => {
                console.log('image cargada', el)
            }
        }
    });

</script>

<style>
    img[lazy=loading] {
        background-color: blue;
        width: 500px;
    }

    img[lazy=loaded] {

    }

    img[lazy=error] {

    }
</style>

<!-- 1-08-11 -->
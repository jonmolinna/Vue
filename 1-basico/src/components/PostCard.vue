<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sapiente facilis natus eos, dolore porro ab architecto? Blanditiis, voluptatem nesciunt perferendis itaque commodi modi nihil? Vero molestias est voluptas dignissimos!</p>
        <PostButton />
    </div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue';

</script>

<style scoped>
    .post-card {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
</style>
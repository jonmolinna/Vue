<template>
    <div>
        <h3>Setup Services</h3>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue';
    
    const service = new PostService();
    const posts = service.getPosts();

    onMounted(async()=> {
        await service.fetchAll()
    })
</script>

<style scoped></style>
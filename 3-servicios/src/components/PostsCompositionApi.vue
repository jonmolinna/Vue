<template>
    <div>
        <h3>Composition Services</h3>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import PostService from '@/services/PostService';

    export default defineComponent({
        name: 'PostsCompositionApi',
        setup() {
            const service = new PostService();
            const posts = service.getPosts();

            onMounted(async () => {
                await service.fetchAll();
            })

            return {
                posts
            }
        }
    })
</script>

<style scoped></style>
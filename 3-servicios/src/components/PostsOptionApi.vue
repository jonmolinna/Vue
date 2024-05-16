<template>
    <div>
        <h3>Option Services</h3>
        <ul class="post-list">
            <li v-for="post in posts.value" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import PostService from '@/services/PostService';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PostsOptionApi',
        data() {
            const service = new PostService();
            const posts = service.getPosts();

            return {
                posts,
                service
            }
        },
        async mounted() {
            await this.service.fetchAll();
        }
    })
</script>

<style scoped></style>
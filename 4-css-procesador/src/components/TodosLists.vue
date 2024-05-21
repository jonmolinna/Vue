<template>
    <div>
        <h3>Todos Lists</h3>
        <ul class="post-list">
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }} | {{ todo.completed }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import TodosService from '@/services/post.service';
    import {onMounted} from 'vue';

    const service = new TodosService();
    const todos = service.getTodos();

    onMounted(async() => {
        await service.fetchAllTodos();
    })
</script>

<style scoped lang="scss">
    .post-list {
        list-style: none;

        li {
            color: $red;
        }

        li:hover {
            background-color: darken(#000000, 10%);
        }
    }
</style>
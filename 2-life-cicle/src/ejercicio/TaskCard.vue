<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in $props.tasks" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ task.task }}</td>
                    <td>{{ task.description}}</td>
                    <td>
                        <button @click="handleUpdated(task.id)">Edit</button>
                        <button @click="handleDelete(task.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'TaskCard',
        components: {},
        props: ['tasks'],
        emits: ["deleteTask", "findOneTask"],
        methods: {
            handleDelete(id: number) {
                this.$emit('deleteTask', id);
            },
            handleUpdated(id: number) {
                this.$emit("findOneTask", id)
            }
        }
    })
</script>

<style scoped></style>
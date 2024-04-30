<template>
    <div>
        <h3>Task Form</h3>
        <form @submit="handleSubmit">
            <input type="text" placeholder="Task Name" v-model="initialForm.task">
            <br>
            <input type="text" placeholder="Task Description" v-model="initialForm.description">
            <br>
            <button>Guardar</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import { taskInterface } from './TaskInterface';

    export default defineComponent({
        name: 'TaskForm',
        components: {},
        props: ['task'],
        emits: ["addTask", "updateTask"],
        data() {
            let initialForm: taskInterface = { id: 0, task: '', description: ''};

            return {
                initialForm,
            }
        },
        methods: {
            handleSubmit(e: Event) {
                e.preventDefault();
                if (this.$props.task.id ===  0) {
                    this.$emit('addTask', this.initialForm);
                } 
                else {
                    this.$emit('updateTask', this.initialForm);
                }
                this.initialForm.task = "";
                this.initialForm.description = "";
                this.initialForm.id = 0;
            }
        },
    })
</script>

<style scoped></style>
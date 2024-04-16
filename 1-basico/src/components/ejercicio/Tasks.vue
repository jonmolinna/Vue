<template>
    <section>
        <p>Taks Form</p>
        <form @submit="handleSubmit">
            <input type="text" placeholder="Task Name" v-model="initialForm.name">
            <br>
            <input type="text" placeholder="Task Description" v-model="initialForm.description">
            <br>
            <button>Guardar</button>
        </form>
        <br><br>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="task.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ task.name }}</td>
                        <td>{{ task.description }}</td>
                        <td>
                            <button @click="findOneTask(task.id)">Edit</button>
                            <button @click="deleteTask(task.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    interface taskInterface {
        id: number
        name: string;
        description: string;
    }

    export default defineComponent({
        name: 'TasksForm',
        components: {},
        data() {
            let initialForm: taskInterface = {id: 0, name: '', description: ''};
            let tasks : taskInterface[] = [];

            return {
                initialForm,
                tasks,
            };
        },
        methods: {
            handleSubmit(e: Event) {
                e.preventDefault();
                if (this.initialForm.id === 0) {
                    this.tasks.push({
                        id: new Date().getTime(),
                        name: this.initialForm.name,
                        description: this.initialForm.description,
                    });
                }
                else {
                    const taskUpdate = this.tasks.map(task => {
                        if (task.id === this.initialForm.id) {
                            return { ...this.initialForm, name: this.initialForm.name, description: this.initialForm.description }
                        }
                        return task
                    })
                    this.tasks = taskUpdate;
                }

                this.initialForm.name = '';
                this.initialForm.description = '';
            },
            deleteTask(id: number) {
                const tasks = this.tasks.filter(task => task.id !== id);
                this.tasks = tasks;
            },
            findOneTask(id: number) {
                let task = this.tasks.find(task => task.id === id);
                if (task) {
                    this.initialForm = {id: task.id, name: task.name, description: task.description}
                }
            }
        },
    })
</script>

<style></style>
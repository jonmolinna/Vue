<template>
    <div>
        <TaskForm 
            @addTask="addTask"
            :task="task"
            @updateTask="updateTask"
        />
        <br><br>
        <TaskCard 
            :tasks="tasks"
            @deleteTask="deleteTask"
            @findOneTask="findOneTask"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TaskForm from './TaskForm.vue';
    import TaskCard from './TaskCard.vue';
    import { taskInterface } from './TaskInterface';

    export default defineComponent({
        name: 'TasksList',
        components: {TaskForm, TaskCard},
        data() {
            let tasks: taskInterface[] = [];
            let task: taskInterface = { id: 0, task: '', description: ''};

            return {
                tasks,
                task
            }
        },
        methods: {
            addTask(task: taskInterface) {
                this.tasks.push({
                    id: new Date().getTime(),
                    task: task.task,
                    description: task.description,
                })
            },
            deleteTask(id: number) {
                const tasks = this.tasks.filter(task => task.id !== id);
                this.tasks = tasks;
            },
            findOneTask(id: number) {
                let taskEdit = this.tasks.find(task => task.id === id);
                if (taskEdit) {
                    this.task = taskEdit;
                }
            },
            updateTask(task: taskInterface) {
                const taskUpdate = this.tasks.map(elemt => {
                    if (elemt.id === task.id) {
                        return { ...task, task: task.task, description: task.description}
                    }
                    return elemt
                })
                this.tasks = taskUpdate;
            }
        }

    })
</script>

<style scoped></style>
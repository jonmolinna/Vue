<template>
    <div>
        <h2>Condiciones y Bucles</h2>

        <span v-if="seen">
            Now you see me
        </span>

        <ul>
            <li v-for="todo in todos" v-bind:key="todo.id">
                {{ todo.name }}
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data(){
        return {
            seen: true,
            todos: [
                {id: 1, name: "JavaScript Vanilla"},
                {id: 2, name: "React"},
                {id: 3, name: "Angular"},
                {id: 4, name: "Vue"},
            ]
        }
    },
};
</script>
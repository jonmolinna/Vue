<template>
    <div>
        <h2>Componentes y Paso de Props</h2>
        <ul>
            <ComponenteHijo 
                v-for="item in groceryList"
                v-bind:key="item.id"
                v-bind:todo="item"
            />
        </ul>
        
    </div>
</template>

<script>
import ComponenteHijo from './ComponenteHijo.vue';

export default {
    data() {
        return {
            groceryList: [
                { id: 1, text: "JavaScript Vanilla"},
                { id: 2, text: "React Js"},
                { id: 3, text: "Vue Js"},
                { id: 4, text: "Angular Js"},
            ]
        };
    },
    components: {
        ComponenteHijo
    }
};
</script>
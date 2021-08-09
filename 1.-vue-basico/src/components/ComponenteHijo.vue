<template>
    <li>
        {{ todo.text }}
    </li>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    props: ['todo']
}
</script>
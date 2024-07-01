<template>
    <h3>Example 3</h3>
    <UsersLists />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import UsersLists from './UsersLists.vue';

    export default defineComponent({
        name: 'UsersHome',
        components: {
            UsersLists,
        },
    })

</script>
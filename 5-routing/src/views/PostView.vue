<template>
    <div>
        <h3>Post View del elemento: {{ postId }}</h3>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    let postId = ref();

    onMounted(() => {
        const route = useRoute();
        postId.value = route.params.id;
        // console.log('AQUIII', route);
    });

</script>
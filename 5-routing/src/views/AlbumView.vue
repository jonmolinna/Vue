<template>
    <p>Albunes de los usuarios: {{ userId }}</p>
    <div v-for="album in albums" :key="album.id">
        <p>Hola Mundo</p>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import AlbumService from '@/services/AlbumService';

    const service = new AlbumService();

    let userId = ref();
    const albums = service.getAllAlbumsByUserId();
    
    onMounted(() => {
        const route = useRoute();
        userId.value = route.params.id;
    });
    
    onMounted(async () => {
        await service.fetchAllAlbum(userId.value);
    })
</script>
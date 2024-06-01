<template>
    <div class="container">
        <h2>Albunes del usuario: {{ userId }}</h2>
        <div class="grid">
            <div v-for="album in albums" :key="album.id" class="card">
                <p>{{ album.title }}</p>
            </div>
        </div>
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

<style scoped lang="scss">
.container {
        max-width: 900px;
        margin: 0 auto;

        h2 {
            text-align: center;
            color: #374151;
            font-weight: 700;
        }
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 0.5rem;

}
</style>
<template>
    <div>
        <h3>Todos Lists</h3>
        <div class="container">
            <div v-for="user in users" :key="user.id" class="card">
                <p class="card__name">{{ user.name }}</p>
                <p class="card__username">@{{ user.username }}</p>
                <p class="card__email">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import UserService from '@/services/user.service';
    import { onMounted } from 'vue';

    const service = new UserService();
    const users = service.getAllUsers();

    onMounted(async() => {
        await service.fetchAll();
    });

</script>

<style scoped lang="scss">
    .container {
        max-width: 950px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;

        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            padding: 10px;

            .card__name {
                text-align: center;
                font-size: 1.2rem;
                color: $pink;
            }

            .card__username {
                text-align: center;
                font-size: 0.7rem;
                margin-top: -10px;
                color: $gray;
            }

            .card__email {
                text-align: center;
                font-size: 0.9rem;
                color: $gray;
            }
            
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
    }
</style>
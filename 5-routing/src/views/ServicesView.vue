<template>
    <div class="container">
        <h2>Seccion Servicios</h2>
        <div class="grid">
            <div class="card" v-for="user in users" :key="user.id">
                <h4>{{ user.name }}</h4>
                <span>@{{ user.username }}</span>
                <p>{{ user.email }}</p>
                <div>
                    <router-link :to="{name: 'album', params: {id: user.id}}" class="link" >
                        Ver Posts
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import UserService from '@/services/UserService';
    import { onMounted } from 'vue';

    const service = new UserService();
    const users = service.getAllUsers();

    onMounted(async() => {
        await service.fetchAllUsers();
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

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 0.5rem;

        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        h4 {
            text-align: center;
            color: #be185d;
            font-size: 1.1rem;
        }

        span {
            display: block;
            text-align: center;
            color: #6b7280;
            margin-top: -20px;
        }

        p {
            text-align: center;
            color: #1f2937;
        }

        div {
            display: flex;
            justify-content: center;
        }

        .link {
            background-color: #04AA6D;
            border: none;
            color: white;
            padding: 0.5rem 0.7rem;
            text-align: center;
            font-size: 0.8rem;
            cursor: pointer;
            text-decoration: none;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }

</style>
<template>
    <div class="container">
        <div class="grid">
            <div v-for="user of users" :key="user.id" class="card">
                <h2 class="card_title">{{ user.name }}</h2>
                <span class="card_span">{{ user.email }}</span>
                <div class="card_btns">
                    <button class="card_btn">Update</button>
                    <button class="card_btn" @click="deleteUser(user.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { userInterface } from '@/interface/user.interface';
    import { Ref, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const gellUsers = () => store.dispatch('getAllUsers');
    const deleteUser = (id: number) => store.dispatch('deleteUserById', id);

    onMounted(() => {
        gellUsers();
    });

    const users: Ref<userInterface[]> = computed(() => store.state.userApiModule.users);
</script>

<style scoped>
.container {
        max-width: 700px;
        margin: 0 auto;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        padding: 10px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card_title {
        color: #047857;
        font-size: 1rem;
        font-weight: 700;
    }

    .card_span {
        display: block;
        font-size: .9rem;
        margin-top: -10px;
        color: #525252;
    }

    .card_btns {
        margin-top: 14px;
        display: flex;
        justify-content: space-around;
    }

    .card_btn {
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
    }

    .card_btn:first-child {
        background-color: #047857;
    }

    .card_btn:last-child {
        background-color: #be123c;
    }

</style>
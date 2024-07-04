<template>
    <div class="container">
        <div class="flex">
            <form class="form" @submit.prevent="handleSubmit">
                <input type="text" placeholder="Name" v-model="initialForm.name">
                <input type="email" placeholder="Email" v-model="initialForm.email">
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div class="grid">
            <div v-for="user of users" :key="user.id" class="card">
                <h2 class="card_title">{{ user.name }}</h2>
                <span class="card_span">{{ user.email }}</span>
                <div class="card_btns">
                    <button class="card_btn" @click="findUserById(user.id)">Update</button>
                    <button class="card_btn" @click="deleteUser(user.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import user from '@/data/user.data';
    import { userInterface } from '@/interface/user.interface';
    import { Ref, computed, onMounted, ref, watch } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    interface formInterface {
        name: string;
        email: string;
        id: number;
    }

    const initialForm: Ref<formInterface> = ref({ name: '', email: '', id: 0 });

    const gellUsers = () => store.dispatch('getAllUsers');
    const deleteUser = (id: number) => store.dispatch('deleteUserById', id);
    const addUser = (user: userInterface) => store.dispatch('addUser', user);
    const findUserById = (id: number) => store.commit('findUserById', id);
    const updatedUser = (user: userInterface) => store.dispatch('updatedUser', user);

    const userEdit: Ref<userInterface> = computed(() => store.state.userApiModule.user);
    
    const handleSubmit = () => {
        if (initialForm.value.id !== 0) {
            let userData = userEdit.value;
            let userUpdated: userInterface = {...userData, id: userData.id, email: initialForm.value.email, name: initialForm.value.name }
            updatedUser(userUpdated);
        } else {
            const newUser: userInterface = {...user, id: new Date().getTime(), name: initialForm.value.name, email:initialForm.value.email };
            addUser(newUser);
        }

        initialForm.value.email = "";
        initialForm.value.name = "";
        initialForm.value.id = 0;
    }

    onMounted(() => {
        gellUsers();
    });

    watch(userEdit, (user) => {
        if (user) {
            initialForm.value.email = user.email;
            initialForm.value.name = user.name;
            initialForm.value.id = user.id
        }
    })

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

    .flex {
        display: flex;
        justify-content: center;
        
    }

    .form {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 300px;
    }

    .form > input {
        margin-bottom: 10px;
        padding: .4rem;
    }

    .form > button {
        padding: .4rem;
        background-color: #059669;
        color: white;
        border: none;
        cursor: pointer;
    }


</style>
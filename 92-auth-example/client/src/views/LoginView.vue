<template>
    <form class="mb-2">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
        <p class="mt-4">{{ feedback }}</p>
    </form>
    <RouterLink :to="{name: 'register'}">
        Create account
    </RouterLink>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import useAuth from '@/store/auth';
    import router from '@/router';

    const store = useAuth();
    const email = ref('');
    const password = ref('');
    const feedback = ref('');
    
    const handleSubmit = async () => {
        const response = await store.login(email.value, password.value);

        if (response === false) {
            feedback.value = "Login Error";
        } else {
            router.push({name: 'note'})
        }
    } 


</script>
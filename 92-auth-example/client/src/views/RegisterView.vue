<template>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="email" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
        <p class="mt-2">{{ feedback }}</p>
    </form>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import useAuth from '@/store/auth'
    import router from '@/router';
    const store = useAuth();

    const name = ref('');
    const email = ref('');
    const password = ref('');

    const feedback = ref('');

    const handleSubmit = async () => {
        const response = await store.register(name.value, email.value, password.value)

        if (response === false) {
            // ERROR
            feedback.value = 'Error en el registro';
        } else {
            //SUCCESS
            // router.push({ name: 'note'})
            router.push({name: 'login'});
        }
    }

</script>
<template>
     <div class="container">
        <div class="row">
            <div class="col-md-5 offset-md-3 card">
                <form class="card-body">
                    <div class="mb-3 d-flex flex-column">
                        <label class="form-label text-start">Email:</label>
                        <input type="email" v-model="email" class="form-control">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label class="form-label text-start">Password:</label>
                        <input type="password" v-model="password" class="form-control">
                    </div>
                    <div class="d-grid">
                        <button @click.prevent="handleLogin" type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import AuthService from '@/services/auth.service';
    import { inject, ref } from 'vue';
    import { VueCookies } from 'vue-cookies';

    const $cookies = inject<VueCookies>('$cookies');
    
    let email = ref('');
    let password = ref('');

    const handleLogin = async () => {
        const auth = new AuthService();
        const success = await auth.login(email.value, password.value);

        if (success) {
            console.log('Success');
        } else {
            console.log('Failed');
        }
    }

    const takeInforFromUser = () => {
        const token = $cookies?.get('cookie-auth');
    }

    const getUserInfo = () => {
        const token = $session.get('auth')
    }

</script>
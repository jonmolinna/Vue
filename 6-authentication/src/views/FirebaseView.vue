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

<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

    let email = ref('');
    let password = ref('');

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then(userCredential => {
                const user= userCredential.user;
                console.log('User', user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error', {code: errorCode, message: errorMessage});
            })
    }

</script>
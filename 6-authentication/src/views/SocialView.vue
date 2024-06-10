<template>
    <h3>Social Login</h3>
    <div class="content">
        <button @click="handleLogin">Login with Google</button>
        <button>Login with Facebook</button>
        <button>Login with Twitter</button>
        <button>Login with Github</button>
    </div>
</template>

<script lang="ts" setup>
    import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // ToKen
                const credential  = GoogleAuthProvider.credentialFromResult(result);
                const token  = credential?.accessToken;
                console.log('TOKEN', token);

                const user = result?.user;
                console.log('USER', user);

            })
            .catch(error => {
                // Errors
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('Error 1', { code: errorCode, message: errorMessage});

                // Con email utilizada
                const email = error.customData.email;
                console.log('Error 2', email);

                // El tipo de AuthCredential que se utilizo
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log('Error 3', credential); 
            })
    }

</script>
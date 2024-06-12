<template>
    <h3>Social Login</h3>
    <div class="content">
        <button @click="handleLoginWithGoogle">Login with Google</button>
        <button>Login with Facebook</button>
        <button>Login with Twitter</button>
        <button @click="handleLoginWithGitHub">Login with Github</button>
    </div>
</template>

<script lang="ts" setup>
    import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from 'firebase/auth';

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const githubProvider = new GithubAuthProvider();

    const handleLoginWithGoogle = () => {
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
    };

    const handleLoginWithFacebook = () => {
        // Facebook Developer
    }

    const handleLoginWithGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;

                const user = result.user;

                console.log({token, user});
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('ERRor', {errorCode, errorMessage});
            })
    }

</script>
<template>
    <div>
        <form>
            <input type="text" v-model="name" >
            <br> <br>
            <input type="checkbox" v-model="agree" > Acepto los terminos y condiciones
            <br><br>
            <select v-model="country">
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
                <option value="France">France</option>
            </select>
        </form>
        <br><br>
        <p>{{ name }} | {{ agree }} | {{ country }}</p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ModelForm',
        components: {},
        data() {
            return {
                name: '',
                agree: true,
                country: 'Spain'
            }
        },
        methods: {
            
        },
    })
</script>

<style scoped></style>
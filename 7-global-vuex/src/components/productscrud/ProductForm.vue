<template>
    <div class="flex">
        <form class="form" @submit.prevent="handleSubmit">
            <input type="text" placeholder="Name" v-model="initialForm.name">
            <input type="text" placeholder="Description" v-model="initialForm.description">
            <select name="" v-model="initialForm.category">
                <option value="">- - -</option>
                <option value="Aceite">Aceite</option>
                <option value="Tecnologia">Tecnologia</option>
            </select>
            <input type="text" placeholder="Price" v-model="initialForm.price">
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
    import productInterface from '@/interface/product.iterface';
    import { computed, ref, Ref, watch } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const initialForm: Ref<productInterface> = ref({
        id: 0,
        name: '',
        description: '',
        category: '',
        price: 0 
    });

    const addProduct = (payload: productInterface) => store.commit('addProduct', payload)
    const product: Ref<productInterface> = computed(() => store.state.productModule.product);
    const updatedProduct = (payload: productInterface) => store.commit('updatedProduct', payload)

    const handleSubmit = () => {
        if (initialForm.value.id !== 0) {
            const product: productInterface = {...initialForm.value, id: initialForm.value.id};
            updatedProduct(product)
        } else {
            const product: productInterface = {...initialForm.value, id: new Date().getTime()}
            addProduct(product);
        }
        
        initialForm.value.name = "";
        initialForm.value.description= "";
        initialForm.value.category = "";
        initialForm.value.price = 0 ;
        initialForm.value.id = 0;
    };

    watch(product, (product) => {
        if (product) {
            // initialForm.value = product;
            initialForm.value.id = product.id;
            initialForm.value.name = product.name
            initialForm.value.description = product.description
            initialForm.value.category = product.category
            initialForm.value.price = product.price
        }
    })

</script>

<style scoped>
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

    .form > select {
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
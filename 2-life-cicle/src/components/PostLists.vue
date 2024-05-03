<template>
    <div class="container">
        <PostDetail 
            v-for="product in products" :key="product.id" 
            :name="product.name" 
            :price="product.price"
            @showAlert="showAlert"
        />
    </div>
    <br><br><br>
    <div class="container">
        <PostsSetup 
            v-for="product in products" :key="product.id" 
            :name="product.name" 
            :price="product.price"
            @showAlert="showAlert"
        />
    </div>
</template>

<script lang="ts" setup>
    import PostDetail from './PostDetail.vue';
    import PostsSetup from './PostsSetup.vue';
    
    interface productInterface {
        id: number,
        name: string,
        price: number
    }

    let products: productInterface[] = [
        {
            id: 1,
            name: 'LAPTOP LENOVO LEGION 5',
            price: 3679
        },
        {
            id: 2,
            name: 'Notebook Lenovo V15 G3 IAP',
            price: 1187
        },
        {
            id: 3,
            name: 'Laptop Avanzada ASUS TUF',
            price: 3093
        },
        {
            id: 4,
            name: 'Laptop Avanzada ASUS TUF',
            price: 4363
        },
        {
            id: 5,
            name: 'Laptop Oficina Lenovo V15 G3 IAP',
            price: 1265
        },
        {
            id: 6,
            name: 'LAPTOP ASUS TUF GAMING A15',
            price: 3019
        }
    ]

    function showAlert(msg: string) {
        alert(msg)
    }

</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
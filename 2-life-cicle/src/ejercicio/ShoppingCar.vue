<template>
    <div>
        <h3>Lista de productos</h3>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Shopping</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in laptops" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>S/ {{ item.price }}</td>
                    <td>
                        <button @click="addCart(item)">Add</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Tu carrito de compra</h3>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Price Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>S/ {{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>S/ {{ item.price * item.quantity }}</td>
                    <td>
                        <button @click="deleteCart(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="2">Total Productos</th>
                    <td colspan="4" class="text-right">
                        {{ quantitYProducts }}
                    </td>
                </tr>
                <tr>
                    <th colspan="2">U.G.V (18%)</th>
                    <td colspan="4" class="text-right">
                        S/ {{ priceIgbProducts }}
                    </td>
                </tr>
                <tr>
                    <th colspan="2">Precio total</th>
                    <td colspan="4" class="text-right">
                        S/ {{ priceTotalProducts }}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { cartInterface, shoppingInterface } from './shopping.interface';
    import { data } from './data.shopping';
    
    export default defineComponent({
        name: 'ShoppingCar',
        components: {},
        data() {
            let laptops : shoppingInterface[] = data;
            let cart: cartInterface[] = [];

            return {
                laptops,
                cart
            }
        },
        methods: {
            addCart(shopping: shoppingInterface): void {
                let existProduct = this.cart.find(item => item.id === shopping.id)

                if (existProduct) {
                    const product = this.cart.map(item => {
                        if (item.id === shopping.id) {
                            return { ...item, quantity: item.quantity + 1}
                        }
                        return item
                    });

                    this.cart = product;
                } else {
                    this.cart.push({ ...shopping, quantity: 1})
                }
            },
            deleteCart(id: number) {
                const product = this.cart.filter(item => item.id !== id);
                this.cart = product;
            }
        },
        computed: {
            quantitYProducts(): number {
                const num : number = this.cart.reduce((acc, item) => item.quantity + acc, 0)
                return num;
            },
            priceTotalProducts(): number {
                const priceTotal: number = this.cart.reduce((acc, item) => (item.quantity * item.price) + acc, 0);
                return priceTotal;
            },
            priceIgbProducts(): number {
                const priceTotal: number = this.cart.reduce((acc, item) => (item.quantity * item.price) + acc, 0);
                let igb = (priceTotal * 18) / 100
                return igb
            }
        },
    })
</script>

<style scope>
    .text-right {
        text-align: right;
    }
</style>
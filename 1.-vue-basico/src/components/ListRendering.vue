<template>
    <div>
        <h2>v-for</h2>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                {{item.id}} - {{ item.message }}
            </li>
        </ul>

        <ul>
            <li v-for="(item, index) in items" v-bind:key="index">
                 {{index}} - {{ item.message }}
            </li>
        </ul>

        <ul>
            <li v-for="(value, name) in biografia" :key="name">
                {{ name }} - {{ value }}
            </li>
        </ul>

        <ul v-if="items.length">
            <li v-for="(value, name) in biografia" :key="name">
                {{ name }} - {{ value }}
            </li>
        </ul>
        <p v-else>No hay dato</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {id: 1, message: 'Mensaje 1'},
                {id: 2, message: 'Mensaje 2'},
                {id: 3, message: 'Mensaje 3'},
                {id: 4, message: 'Mensaje 4'},
                {id: 5, message: 'Mensaje 5'},
            ],
            biografia: {
                title: 'Como hacer listas en Vue',
                author: 'Jane Doe',
                publicAt: '2016-04-10'
            }
        };
    },
};
</script>
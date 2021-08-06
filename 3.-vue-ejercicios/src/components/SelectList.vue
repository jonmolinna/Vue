<template>
    <div>
        <label for="" class="mr-4">{{name}}: </label>
        <select name="" id="" @change="handleChange($event)">
            <option value="">Elige un {{name}}</option>
            <option :value="lugar.id" v-for="lugar in lugares" :key="lugar.id">{{ lugar.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ["lugares", "name", "handleChange",],
};
</script>
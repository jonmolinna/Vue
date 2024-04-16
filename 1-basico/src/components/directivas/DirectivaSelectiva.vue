<template>
    <div>
        <h4>C. Directiva For</h4>
        <ul>
            <li v-for="(country, index) in countries" v-bind:key="index">{{ country }}</li>
        </ul>
        <ul>
            <li v-for="employee in employees" :key="employee.id">{{ employee.name }}</li>
        </ul>
    </div>
    <div>
        <!-- Pinta ambos en el DOM -->
        <h4>B. Directiva Show</h4>
        <p v-show="age < 18">Eres menor de edad</p>
        <p v-show="age >= 18">Eres mayor de edad</p>
    </div>
    <div>
        <!-- Pinta solo la condicion en el DOM -->
        <h4>A. Directiva If - Else</h4>
        <p v-if="age < 18">Eres menor de edad</p>
        <p v-else>Eres mayor de edad</p>

    </div>
</template>

<script lang="ts" setup>
    import { Ref, ref } from 'vue';

    interface employeeInterface {
        id: number,
        name: string
    }

    let age = 28;
    let countries: Ref<Array<string>> = ref(['Spain', 'UK', 'Italy', 'Portugal']);
    let employees: Ref<Array<employeeInterface>> = ref([
        {
            id: 1,
            name: 'Kendra Contreras'
        },
        {
            id: 2,
            name: 'Malina Tanase',
        },
        {
            id: 3,
            name: 'Noah Aaron'
        },
        {
            id: 4,
            name: 'Matt'
        },
        {
            id: 5,
            name: 'Hannah Khoma'
        }
    ])
</script>

<style scoped></style>
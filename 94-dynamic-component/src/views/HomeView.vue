<template>
  <h1>Listado de usuarios</h1>
  <input type="text" placeholder="Filter user" v-model="search" @keyup="handleSearch" />
  <div>
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
    <button @click="handleLayout(TableLayout)">Ver en tabla</button>
  </div>
  <component :is="layout" :content="filteredUsers" />
</template>

<script lang="ts" setup>
  import { ref, defineAsyncComponent } from 'vue';

  // defineAsyncComponent => pita los componentes en forma de asyncrona
  const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'));
  const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'));
  const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'));

  const layout = ref(ListLayout);
  const search = ref('');

  const handleLayout = (component: any) => layout.value = component;

  const handleSearch = () => {
    filteredUsers.value = users.value.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))
  };

  const filteredUsers = ref([]);
  


  const users = ref([
    {
      name: 'Luis',
      age: 50,
      position: 'frontend'
    },
    {
      name: 'Juanjo',
      age: 90,
      position: 'Fullstack'
    },
    {
      name: 'Lucia',
      age: 25,
      position: 'frontend'
    },
    {
      name: 'kendra',
      age: 41,
      position: 'backend'
    },
    {
      name: 'Roberto',
      age: 55,
      position: 'backend'
    }
  ])

  filteredUsers.value = users.value
</script>

<template>
  <h1>Comments</h1>
  <div v-if="loading">
    <p>Cargando ...</p>
  </div>

  <!-- <div v-else>
    <ul>
      <li v-for="(comment, index) in result.getAllComments" :key="index" >
        <b>{{ comment.name }}:</b> {{ comment.text }}
      </li>
    </ul>
  </div> -->
  <div v-else>
    <ul>
      <li v-for="(comment, index) in result.getCommentsFromUser" :key="index" >
        <b>{{ comment.name }}:</b> {{ comment.text }}
      </li>
    </ul>
  </div>


  <div v-if="error">
    <h3 style="error">{{ error.message }}</h3>
  </div>

  <button @click="refetch()" >Refresh</button>

</template>

<script lang="ts" setup>
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag';

  const { result, loading, error, refetch, onResult, onError } = useQuery(gql`
    query Query($name: String!) {
      getCommentsFromUser(name: $name) {
        name
        text
      }
    }
  `, () => ({
    name: "User 1"
  }), {
        fetchPolicy: 'cache-and-network', 
        pollInterval: 5000
  });

  onResult(query => {
    console.log(query.data)
    console.log(query.loading)
    console.log(query.networkStatus)
  })

  onError(error=> {
    console.log(error.graphQLErrors)
  })

</script>

<style>
  .error {
    color:  red;
  }
</style>
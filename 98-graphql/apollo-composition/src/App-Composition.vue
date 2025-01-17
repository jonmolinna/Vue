<template>
  <h2>Query</h2>
  <p>Comments</p>
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
      <li v-for="(comment, index) in messages" :key="index" >
        <b>{{ comment.name }}:</b> {{ comment.text }}
      </li>
    </ul>
  </div>


  <div v-if="error">
    <h3 style="error">{{ error.message }}</h3>
  </div>

  <h2>Mutation</h2>

  <button @click="refetch()" >Refresh</button>

  <p>Create Comment</p>
  <!-- <button @click="$event => createComment({name:'User 1', text:'Hello from vue'})">
    Send Message
  </button> -->

  <button @click="$event => createComment()">
    Send Message
  </button>

  <h2>Subcripciones - Web Sockets</h2>
  <ul>
    <li v-for="(comment, index) of sbComments" :key="index">
      {{ comment.name }} ----- {{ comment.text }}
    </li>
  </ul>
  
</template>

<script >
  import { computed, defineComponent, watch, ref } from 'vue';
  import { useQuery, useMutation, useSubscription } from '@vue/apollo-composable';
  import gql from 'graphql-tag';

  const COMMENTS = gql`
    query Query {
        getAllComments {
          name
          text
      }
    } 
  `;


  export default defineComponent({
    setup() {
      const { result, loading, error, refetch, onResult, onError} = useQuery(COMMENTS);
      const messages  = computed(() => result.value?.getAllComments ?? []); 

      // ----------------------- Get All Comments
      // const { result, loading, error } = useQuery(gql`
      //   query Query {
      //     getAllComments {
      //       name
      //       text
      //     }
      //   } 
      // `)

      // ----------------------- Get One Comment By User
      // const { result, loading, error, refetch, onResult, onError } = useLazyQuery(gql`
      // const { result, loading, error, refetch, onResult, onError } = useQuery(gql`
      //   query Query($name: String!) {
      //     getCommentsFromUser(name: $name) {
      //       name
      //       text
      //     }
      //   }
      // `, () => ({
      //   name: "User 1"
      // }), {
      //   fetchPolicy: 'cache-and-network', 
      //   // cache-first' => si tiene cacheado los datos, trae eso, pero si son datos que siempre se va a actualizar mejor no cachear
      //   // cache-and-network => verifica el cache con la peticion del servidor y realiza los cambios si hacen falta
      //   // cache-only => solo trae datos del cache y nunca ira al newtwoor a hacer la consulta
      //   // network-only => cuando trae el dato lo cachea, solo se ira al servidor a obtener datos
      //   // no-cache => nunca va a cachear
      //   pollInterval: 5000
      //   // Cada 5 segundos comprueda si los datos se an modificado en el servicios
      // });

      const { mutate: createComment, onDone } = useMutation(gql`
        mutation CreateComment($name: String!, $text: String!) {
          createComment(name: $name, text: $text)
        }
      `, () => ({
        variables: {
          name: "Kendra Contreras",
          text: "this is a test"
        },
        update: (cache, {data: { createComment }}) => {
          let data = cache.readQuery({ query: COMMENTS });
          console.log("-----------------> data.", data)
          console.log("-----------------> comment.", createComment)
          data = {
             ...data,
             messages: [
               ...data.getAllComments,
               {
                name: "this is a name",
                text: "this is a text"
               }
             ]
           }

          cache.writeQuery({ query: COMMENTS, data})
        }
      }));

      const sbComments = ref([]);

      const { result: sbCommentCreated } = useSubscription(gql`
        subscription CommentCreated {
          commentCreated {
              name
              text
            }
          }
      `);

      watch(
        sbCommentCreated,
        data => {
          console.log("New Comment received", data.commentCreated)
          sbComments.value.push(data.commentCreated);
        },
      )

      // Ciclo de vida query
      onResult(query => {
        console.log(query.data)
        console.log(query.loading)
        console.log(query.networkStatus)
      })

      onError(error=> {
        console.log(error.graphQLErrors)
      })

      // Ciclo de vida - Hooks
      onDone(done => {
        console.log("----> done", done.value)
      })



      return {
        result,
        loading,
        error,
        refetch,
        createComment,
        messages,
        sbComments,
      };
    }
  });

</script>

<style>
  .error {
    color:  red;
  }
</style>
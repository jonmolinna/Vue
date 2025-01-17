<template>
  <h2>Composition Option</h2>

  <p>1. Query</p>
  <div v-if="$apollo.queries.comments.loading">
    <h3>Loading ...</h3>
  </div>
  <ul v-else>
    <li v-for="(comment, index) in comments" :key="index">
      {{ comment.name }} --- {{ comment.text }}
    </li>
  </ul>

  <br>

  <p>2. Query con Variables</p>
  <div v-if="$apollo.queries.getCommentsFromUser.loading">
    <h3>Loading ...</h3>
  </div>
  <ul v-else>
    <li v-for="(comment, index) in getCommentsFromUser" :key="index">
      {{ comment.name }} --- {{ comment.text }}
    </li>
  </ul>

  <br>

  <p>3. Mutation</p>
  <form>
    <input type="text" name="name" v-model="name">
    <input type="text" name="text" v-model="text">
  </form>
  <button @click="addComment">Add Comment</button>

  <p>4. subscription</p>

  
</template>

<script >
  import { defineComponent} from 'vue';
  import gql from 'graphql-tag';

  export default defineComponent({
    apollo: {
      comments: gql`
      query Query {
        comments: getAllComments {
          name
          text
        }
      }
      `,

      getCommentsFromUser: {
        query: gql`
          query Query($name: String!) {
          getCommentsFromUser(name: $name) {
            name
            text
          }
        }
        `,
        variables () {
          return {
            name: "User 1" // this.inpur.value
          }
        },
        fetchPolicy: 'cache-and-network'
      },

      $subscribe: {
        comments: {
          query: gql `
          subscription CommentCreated {
            commentCreated {
              name
              text
            }
          }
          `,
          result ({ data }) {
            console.log("--------> ", data.commentCreated)
            this.comments = [...this.comments, data.commentCreated]
          }
        }
      }
    },

    data () {
      return {
        comments: [],
        getCommentsFromUser: [],
        name: "",
        text: "",
      }
    },
    methods: {
      addComment() {
        this.$apollo.mutate({
          mutation: gql`
            mutation CreateComment($name: String!, $text: String!) {
              createComment(name: $name, text: $text)
            }
          `,
          variables: {name: this.name, text: this.text}, // => varoles no reactivos
          // variables() {
          //   return{
          //     name: 'Kendra',
          //     text: "This is a comment by Kendra"
          //   }
          // }
          // update: (cache, {data: { CreateComment }}) => {}
        })

        this.text = "";
        this.name = "";
      }
    }
  })

</script>

<style>

</style>

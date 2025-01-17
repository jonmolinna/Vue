import { createApp, provide, h } from "vue";
import App from "./App.vue";
// import { WebSocketLink } from "@apollo/client/link/ws";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client/core";

// Composition API
// Composition API Guide
import { DefaultApolloClient } from "@vue/apollo-composable";

// Web Socket
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000`,
//   options: {
//     reconnect: true,
//   },
// });

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/graphql",
  })
);

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  // link: httpLink,
  link,
  cache,
});

// Config Composition API
createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
}).mount("#app");

import { ApolloClient, createNetworkInterface } from "apollo-client";

export const networkInterface = createNetworkInterface({
  uri: 'https://v7np45173.lp.gql.zone/graphql'
});

export const client = new ApolloClient({
  networkInterface
});

export function provideClient(): ApolloClient {
  return client;
}

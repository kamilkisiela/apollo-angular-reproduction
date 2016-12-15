import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';

const networkInterface = createBatchingNetworkInterface({
  uri: '/graphql',
  batchInterval: 10
});

export const client = new ApolloClient({
  networkInterface
});

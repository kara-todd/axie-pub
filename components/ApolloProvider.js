import React from 'react';
import _get from 'lodash.get';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import _getArray from 'utis/get-array';

const client = new ApolloClient({
  uri: 'https://axieinfinity.com/graphql-server-v2/graphql?r=axie.pub',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Axie: {
            keyFields: ['id'],
          },
          axies: {
            keyArgs: false,
            merge(existing, incoming, { args }) {
              if (!args) {
                return incoming;
              }

              const incomingIds = Array.isArray(incoming)
                ? incoming.map(({ id }) => id)
                : [];

              return {
                ...incoming,
                results: [
                  ..._getArray(existing, 'results').filter(
                    ({ id }) => !incomingIds.includes(id)
                  ),
                  ..._getArray(incoming, 'results'),
                ],
              };
            },
          },
        },
      },
    },
  }),
});

const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;

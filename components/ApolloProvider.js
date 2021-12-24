import React from 'react';
import _get from 'lodash.get';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';

import _getArray from 'utis/get-array';

const axie = {
  keyFields: ['id'],
};

const axies = {
  keyArgs: ['criteria'],
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
};

const link = new HttpLink({
  uri: 'https://graphql-gateway.axieinfinity.com/graphql?r=axie.pub',
  credentials: 'include',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Axie: axie,
          axies,
        },
      },
    },
  }),
});

const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;

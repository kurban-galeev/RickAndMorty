import { ApolloClient, InMemoryCache } from '@apollo/client'

import { Characters } from './generated/graphql'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter', []],

            merge(existing: Characters, incoming: Characters) {
              if (!existing) {
                return incoming
              }

              if (!incoming) {
                return existing
              }

              return {
                ...incoming,
                results: [...existing.results, ...incoming.results],
              }
            },
          },
        },
      },
    },
  }),
})

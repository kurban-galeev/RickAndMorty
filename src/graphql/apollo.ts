import { ApolloClient, InMemoryCache } from '@apollo/client'

import { Characters, Locations } from './generated/graphql'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter', ['status', 'name', 'gender', 'spesies']],

            merge(existing: Characters, incoming: Characters) {
              if (!existing) {
                return incoming
              }

              if (!incoming) {
                return existing
              }

              if (existing.info.next === incoming.info.next) {
                return existing
              }

              return {
                ...incoming,
                results: [...existing.results, ...incoming.results],
              }
            },
          },
          locations: {
            keyArgs: ['filter', ['name', 'type', 'dimension']],

            merge(existing: Locations, incoming: Locations) {
              if (!existing) {
                return incoming
              }

              if (!incoming) {
                return existing
              }

              if (existing.info.next === incoming.info.next) {
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

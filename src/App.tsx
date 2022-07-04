import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { client } from './graphql/apollo'
import { FilterCharacterProvider } from './modules/character/filter-context'
import { FilterEpisodeProvider } from './modules/episode/filter-context'
import { FilterLocationProvider } from './modules/location/filter-context'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <FilterLocationProvider>
        <FilterCharacterProvider>
          <FilterEpisodeProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </FilterEpisodeProvider>
        </FilterCharacterProvider>
      </FilterLocationProvider>
    </ApolloProvider>
  )
}

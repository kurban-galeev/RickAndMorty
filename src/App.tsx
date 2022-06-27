import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { client } from './graphql/apollo'
import { FilterProvider } from './modules/filter-context'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </FilterProvider>
    </ApolloProvider>
  )
}

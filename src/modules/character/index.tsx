import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { makeVar } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useGetLocationsTypeQuery } from 'src/graphql/generated/graphql'
import { RoutesEnum } from 'src/navigation/routes-enum'
import { Header } from 'src/ui/header'

import { useFilterContext } from '../filter-context'
import { ItemCharacter } from './item-character'
import { CharcterProp } from './types'

const ContainerLoading = styled.View`
  justify-content: center;
  align-items: center;
`
const ContainerCharacter = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`
export const uniqueName = makeVar<string[]>([])
export const uniqueSpecies = makeVar<string[]>([])

export const CharacterScreen = () => {
  const { navigate } = useNavigation<CharcterProp>()

  const pressOnFilter = () => navigate(RoutesEnum.CHARACTER_FILTER)
  const { filterContext } = useFilterContext()
  const { data, loading, fetchMore } = useGetLocationsTypeQuery({
    variables: {
      name: filterContext.isApply ? filterContext.name : '',
      page: 1,
      status: filterContext.isApply ? filterContext.status : '',
      gender: filterContext.isApply ? filterContext.gender : '',
      species: filterContext.isApply ? filterContext.gender : '',
    },
  })
  const nextPage = data?.characters?.info?.next
  const results = data?.characters?.results

  if (!loading && results) {
    const uniqueNam = Array.from(
      new Set(results.map((item) => JSON.stringify(item.name))),
    ).map((item) => JSON.parse(item))

    const uniqueSpecie = Array.from(
      new Set(results.map((item) => JSON.stringify(item.species))),
    ).map((item) => JSON.parse(item))

    uniqueSpecies(uniqueSpecie)
    uniqueName(uniqueNam)
  }

  const fetchMoreCharacter = async () => {
    await fetchMore({
      variables: {
        page: nextPage,
      },
    })
  }

  return (
    <SafeAreaView>
      <Header title="Character" onPress={pressOnFilter} />

      {loading ? (
        <ContainerLoading>
          <ActivityIndicator size="large" />
        </ContainerLoading>
      ) : (
        <FlatList
          data={results}
          onEndReached={() => {
            fetchMoreCharacter()
          }}
          onEndReachedThreshold={2}
          numColumns={2}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => (
            <ContainerCharacter>
              <ItemCharacter
                status={item.status}
                image={item.image}
                name={item.name}
              />
            </ContainerCharacter>
          )}
        />
      )}
    </SafeAreaView>
  )
}

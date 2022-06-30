import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { makeVar } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/graphql/generated/graphql'
import { RoutesEnum } from 'src/navigation/routes-enum'
import { Header } from 'src/ui/header'
import { Loading } from 'src/ui/loading'

import { useFilterContext } from '../filter-context'
import { CharacterProp } from './types'
import { ItemCharacter } from './ui/item-character'

const ContainerCharacter = styled.View`
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`
export const uniqueName = makeVar<string[]>([])
export const uniqueSpecies = makeVar<string[]>([])

export const CharacterScreen = () => {
  const { navigate } = useNavigation<CharacterProp>()

  const pressOnFilter = () => navigate(RoutesEnum.CHARACTER_FILTER)
  const { filterContext, setIdDetail } = useFilterContext()

  const pressOnItems = (id: string) => {
    setIdDetail(id)
    navigate(RoutesEnum.CHARACTER_DETAIL)
  }

  const { data, loading, fetchMore } = useGetCharactersQuery({
    variables: {
      name: filterContext.isApply ? filterContext.name : '',
      page: 1,
      status: filterContext.isApply ? filterContext.status : '',
      gender: filterContext.isApply ? filterContext.gender : '',
      species: filterContext.isApply ? filterContext.species : '',
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
        <Loading />
      ) : (
        <FlatList
          data={results}
          onEndReached={() => {
            fetchMoreCharacter()
          }}
          onEndReachedThreshold={3}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ContainerCharacter>
              <ItemCharacter
                onPress={() => pressOnItems(item.id)}
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

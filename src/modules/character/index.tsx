import React from 'react'
import { FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { makeVar } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/graphql/generated/graphql'
import { useCheckIsFilterEmpty } from 'src/hooks'
import { RoutesEnum } from 'src/navigation/routes-enum'
import { Header } from 'src/ui/header'
import { Loading } from 'src/ui/loading'

import { useFilterCharacter } from './filter-context'
import { CharacterProp } from './types'
import { ItemCharacter } from './ui/item-character'

const ContainerCharacter = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`
const InitialRequestedProps = {
  name: '',
  page: 1,
  status: '',
  gender: '',
  species: '',
}
export const uniqueNameCharacter = makeVar<string[]>([])
export const uniqueSpeciesCharacter = makeVar<string[]>([])

export const CharacterScreen = () => {
  const { navigate } = useNavigation<CharacterProp>()

  const pressOnFilter = () => navigate(RoutesEnum.CHARACTER_FILTER)
  const { filterCharacter, setIdDetail, isApply } = useFilterCharacter()
  const { IsFilterEmpty } = useCheckIsFilterEmpty(filterCharacter)

  const pressOnItems = (id: string) => {
    setIdDetail(id)
    navigate(RoutesEnum.CHARACTER_DETAIL)
  }

  const { data, loading, fetchMore } = useGetCharactersQuery({
    variables: isApply
      ? {
          name: filterCharacter.name,
          page: 1,
          status: filterCharacter.status,
          gender: filterCharacter.gender,
          species: filterCharacter.species,
        }
      : InitialRequestedProps,
  })
  const nextPage = data?.characters?.info?.next
  const results = data?.characters?.results

  if (!loading && results) {
    const uniqueName = Array.from(
      new Set(results.map((item) => JSON.stringify(item.name))),
    ).map((item) => JSON.parse(item))

    const uniqueSpecies = Array.from(
      new Set(results.map((item) => JSON.stringify(item.species))),
    ).map((item) => JSON.parse(item))

    uniqueNameCharacter(uniqueSpecies)
    uniqueSpeciesCharacter(uniqueName)
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
      <Header
        title="Character"
        onPress={pressOnFilter}
        isFilter={IsFilterEmpty()}
      />

      {loading ? (
        <Loading />
      ) : (
        <View style={{ marginBottom: 100 }}>
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
        </View>
      )}
    </SafeAreaView>
  )
}

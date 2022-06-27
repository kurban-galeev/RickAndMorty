import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
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

export const CharacterScreen = () => {
  const { navigate } = useNavigation<CharcterProp>()

  const pressOnFilter = () => navigate(RoutesEnum.CHARACTER_FILTER)
  const [page, setPage] = useState(1)
  const { characterItems, setCharacterItems } = useFilterContext()
  const { data, loading, fetchMore } = useGetLocationsTypeQuery({
    variables: { name: '', page: 1 },
  })
  const nextPage = data?.characters?.info?.next
  const results = data?.characters?.results
  useEffect(() => {
    setPage(nextPage ?? 1)
  }, [nextPage])
  // const scrollEnd = (nativeEvent: NativeScrollEvent) => {}

  if (!loading) {
    // console.log(results)
  }

  const fetchMoreCharacter = async () => {
    fetchMore({
      variables: { name: '', page },
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
            // console.log(page)
            fetchMoreCharacter()
          }}
          onEndReachedThreshold={2}
          numColumns={2}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => (
            <ContainerCharacter>
              <ItemCharacter
                status={item?.status}
                image={item?.image}
                name={item?.name}
              />
            </ContainerCharacter>
          )}
        />
      )}
    </SafeAreaView>
  )
}

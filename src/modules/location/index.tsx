import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { makeVar } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { noop } from 'lodash'
import styled from 'styled-components/native'

import { useGetLocationsQuery } from 'src/graphql/generated/graphql'
import { RoutesEnum } from 'src/navigation/routes-enum'
import { Header } from 'src/ui/header'
import { Loading } from 'src/ui/loading'

import { useFilterLocation } from './filter-context'
import { LocationProp } from './types'
import { ItemLocation } from './ui/item-location'

const initialRequestedProps = {
  name: '',
  page: 1,
  type: '',
  dimension: '',
}
const ContainerCharacter = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`
export const uniqueNameLocation = makeVar<string[]>([])
export const uniqueTypeLocation = makeVar<string[]>([])
export const uniqueDimensionLocation = makeVar<string[]>([])

export const LocationScreen = () => {
  const { isApply, filterLocation } = useFilterLocation()
  const { data, loading, fetchMore } = useGetLocationsQuery({
    variables: isApply
      ? {
          name: filterLocation.name,
          page: 1,
          type: filterLocation.type,
          dimension: filterLocation.dimension,
        }
      : initialRequestedProps,
  })

  const { navigate } = useNavigation<LocationProp>()

  const pressOnFilter = () => navigate(RoutesEnum.LOCATION_FILTER)

  const results = data?.locations.results
  const nextPage = data?.locations?.info?.next

  if (!loading && results) {
    const uniqueName = Array.from(
      new Set(results.map((item) => JSON.stringify(item.name))),
    ).map((item) => JSON.parse(item))
    const uniqueType = Array.from(
      new Set(results.map((item) => JSON.stringify(item.type))),
    ).map((item) => JSON.parse(item))
    const uniqueDimension = Array.from(
      new Set(results.map((item) => JSON.stringify(item.dimension))),
    ).map((item) => JSON.parse(item))

    uniqueNameLocation(uniqueName)
    uniqueTypeLocation(uniqueType)
    uniqueDimensionLocation(uniqueDimension)
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
      <Header title="Location" onPress={pressOnFilter} />

      {loading ? (
        <Loading />
      ) : (
        <View style={{ marginBottom: 180 }}>
          <FlatList
            data={results}
            onEndReached={() => {
              fetchMoreCharacter()
            }}
            onEndReachedThreshold={2}
            numColumns={2}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ContainerCharacter>
                <ItemLocation name={item.name} type={item.type} />
              </ContainerCharacter>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

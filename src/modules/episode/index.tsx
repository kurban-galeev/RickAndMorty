import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { makeVar } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'

import { useGetEpisodesQuery } from 'src/graphql/generated/graphql'
import { useCheckIsFilterEmpty } from 'src/hooks'
import { RoutesEnum } from 'src/navigation/routes-enum'
import { EpisodeItem } from 'src/ui/episode-item'
import { Header } from 'src/ui/header'

import { useFilterEpisode } from './filter-context'
import { EpisodeProp } from './types'

export const uniqueNameEpisode = makeVar<string[]>([])
export const uniqueEpisodeEpisode = makeVar<string[]>([])
const InitialRequestedProps = {
  name: '',
  page: 1,
  episode: '',
}

export const EpisodeScreen = () => {
  const { navigate } = useNavigation<EpisodeProp>()
  const { filterEpisode, isApply } = useFilterEpisode()

  const pressOnFilter = () => navigate(RoutesEnum.EPISODE_FILTER)
  const { IsFilterEmpty } = useCheckIsFilterEmpty(filterEpisode)
  const { data, loading, fetchMore } = useGetEpisodesQuery({
    variables: isApply
      ? {
          name: filterEpisode.name,
          page: 1,
          episode: filterEpisode.episode,
        }
      : InitialRequestedProps,
  })
  const nextPage = data?.episodes?.info?.next
  const results = data?.episodes?.results

  if (!loading && results) {
    const uniqueName = Array.from(
      new Set(results.map((item) => JSON.stringify(item.name))),
    ).map((item) => JSON.parse(item))
    const uniqueEpisode = Array.from(
      new Set(results.map((item) => JSON.stringify(item.episode))),
    ).map((item) => JSON.parse(item))

    uniqueNameEpisode(uniqueName)
    uniqueEpisodeEpisode(uniqueEpisode)
  }

  const fetchMoreEpisode = async () => {
    await fetchMore({
      variables: {
        page: nextPage,
      },
    })
  }

  return (
    <SafeAreaView>
      <Header
        title="Episode"
        onPress={pressOnFilter}
        isFilter={IsFilterEmpty()}
      />
      <View style={{ marginBottom: 180 }}>
        <FlatList
          data={results}
          onEndReached={nextPage ? fetchMoreEpisode : null}
          onEndReachedThreshold={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <EpisodeItem
              key={item.id}
              episode={item.episode}
              name={item.name}
              date={item.air_date}
              id={item.id}
              // onPress={() => pressOnItem(item.id)}
              // isLast={results?.length - 1 === index}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

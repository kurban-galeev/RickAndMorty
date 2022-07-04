import React, { ReactElement } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { noop } from 'lodash'
import styled from 'styled-components/native'

import { useFilter } from 'src/hooks'
import { colors } from 'src/theme/colors'
import { CheckBoxSearch } from 'src/ui/checkbox/checkbox-search'
import { HeaderFilter } from 'src/ui/header-filter'
import { Search } from 'src/ui/search'
import { defaultFilterEpisode } from 'src/utils/constants'

import { uniqueEpisodeEpisode, uniqueNameEpisode } from '.'
import { useFilterEpisode } from './filter-context'

const Container = styled.View`
  margin-bottom: 18px;
  background: ${colors.white[0]};
  border-color: ${colors.grey[2]}
  border-bottom-width: 1px;
  border-top-width: 1px;
`

export const EpisodeFilter = (): ReactElement => {
  const {
    setIsApply,
    setFilterEpisode,
    filterEpisode,
    isVisibleSearchModalName,
    setIsVisibleSearchModalName,
    isVisibleSearchModalEpisode,
    setIsVisibleSearchModalEpisode,
  } = useFilterEpisode()
  const { pressOnApply } = useFilter({ setIsApply })

  const pressOnClear = () => setFilterEpisode(defaultFilterEpisode)

  return (
    <SafeAreaView style={{ backgroundColor: colors.white[0], flex: 1 }}>
      <Search
        title="Name"
        isVisibleModal={isVisibleSearchModalName}
        setIsVisibleModal={setIsVisibleSearchModalName}
        data={uniqueNameEpisode()}
        objectField="name"
        filterContext={filterEpisode}
        setFilterContext={setFilterEpisode}
      />
      <Search
        title="Episode"
        isVisibleModal={isVisibleSearchModalEpisode}
        setIsVisibleModal={setIsVisibleSearchModalEpisode}
        data={uniqueEpisodeEpisode()}
        objectField="episode"
        filterContext={filterEpisode}
        setFilterContext={setFilterEpisode}
      />
      <HeaderFilter onPress={pressOnApply} pressOnClear={pressOnClear} />
      <Container>
        <CheckBoxSearch
          textTitle="Name"
          textDescription="Give a name"
          filterContext={filterEpisode}
          objectField="name"
          setIsVisibleSearchModal={setIsVisibleSearchModalName}
        />
      </Container>
      <Container>
        <CheckBoxSearch
          textTitle="Episode"
          textDescription="Select one"
          filterContext={filterEpisode}
          objectField="episode"
          setIsVisibleSearchModal={setIsVisibleSearchModalEpisode}
        />
      </Container>
    </SafeAreaView>
  )
}

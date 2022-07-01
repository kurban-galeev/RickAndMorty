import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { useFilter } from 'src/hooks'
import { colors } from 'src/theme/colors'
import { CheckBoxSearch } from 'src/ui/checkbox/checkbox-search'
import { HeaderFilter } from 'src/ui/header-filter'
import { defaultFilterLocation } from 'src/utils/constants'

import { Search } from '../../ui/search'
import {
  uniqueDimensionLocation,
  uniqueNameLocation,
  uniqueTypeLocation,
} from '.'
import { useFilterLocation } from './filter-context'

const Container = styled.View`
  margin-bottom: 18px;
  background: ${colors.white[0]};
  border-color: ${colors.grey[2]}
  border-bottom-width: 1px;
  border-top-width: 1px;
`

export const LocationFilter = (): ReactElement => {
  const {
    filterLocation,
    setFilterLocation,
    setIsVisibleSearchModalName,
    isVisibleSearchModalName,
    isVisibleSearchModalType,
    setIsVisibleSearchModalType,
    isVisibleSearchModalDimension,
    setIsVisibleSearchModalDimension,
    setIsApply,
  } = useFilterLocation()
  const { pressOnApply } = useFilter({ setIsApply })

  const pressOnClear = () => setFilterLocation(defaultFilterLocation)

  return (
    <SafeAreaView style={{ backgroundColor: colors.white[0], flex: 1 }}>
      <HeaderFilter onPress={pressOnApply} pressOnClear={pressOnClear} />
      <Search
        title="Name"
        isVisibleModal={isVisibleSearchModalName}
        setIsVisibleModal={setIsVisibleSearchModalName}
        data={uniqueNameLocation()}
        objectField="name"
        filterContext={filterLocation}
        setFilterContext={setFilterLocation}
      />
      <Search
        title="Type"
        isVisibleModal={isVisibleSearchModalType}
        setIsVisibleModal={setIsVisibleSearchModalType}
        data={uniqueTypeLocation()}
        objectField="type"
        filterContext={filterLocation}
        setFilterContext={setFilterLocation}
      />
      <Search
        title="Dimension"
        isVisibleModal={isVisibleSearchModalDimension}
        setIsVisibleModal={setIsVisibleSearchModalDimension}
        data={uniqueDimensionLocation()}
        objectField="dimension"
        filterContext={filterLocation}
        setFilterContext={setFilterLocation}
      />
      <Container>
        <CheckBoxSearch
          textTitle="Name"
          textDescription="Give a name"
          filterContext={filterLocation}
          objectField="name"
          setIsVisibleSearchModal={setIsVisibleSearchModalName}
        />
      </Container>
      <Container>
        <CheckBoxSearch
          textTitle="Type"
          textDescription="Select one"
          filterContext={filterLocation}
          objectField="type"
          setIsVisibleSearchModal={setIsVisibleSearchModalType}
        />
      </Container>
      <Container>
        <CheckBoxSearch
          textTitle="Dimension"
          textDescription="Select one"
          filterContext={filterLocation}
          objectField="dimension"
          setIsVisibleSearchModal={setIsVisibleSearchModalDimension}
        />
      </Container>
    </SafeAreaView>
  )
}

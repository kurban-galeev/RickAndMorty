import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { useFilter } from 'src/hooks'
import { colors } from 'src/theme/colors'
import { CheckBox } from 'src/ui/checkbox/checkbox'
import { CheckBoxSearch } from 'src/ui/checkbox/checkbox-search'
import { HeaderFilter } from 'src/ui/header-filter'
import {
  defaultFilterCharacter,
  genderList,
  statusList,
} from 'src/utils/constants'

import { Search } from '../../ui/search'
import { uniqueNameCharacter, uniqueSpeciesCharacter } from '.'
import { useFilterCharacter } from './filter-context'

const Container = styled.View`
  margin-bottom: 18px;
  background: ${colors.white[0]};
  border-color: ${colors.grey[2]}
  border-bottom-width: 1px;
  border-top-width: 1px;
`
const TextTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.grey[0]};
`
const ContainerTitle = styled.View`
  margin: 0 0 8.5px 16px;
`

export const CharacterFilter = (): ReactElement => {
  const {
    isVisibleSearchModalName,
    isVisibleSearchModalSpecies,
    setIsVisibleSearchModalName,
    setIsVisibleSearchModalSpecies,
    filterCharacter,
    setIsApply,
    setFilterCharacter,
  } = useFilterCharacter()
  const { pressOnApply } = useFilter({ setIsApply })

  const pressOnClear = () => {
    setFilterCharacter(defaultFilterCharacter)
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.white[0], flex: 1 }}>
      <Search
        title="Name"
        isVisibleModal={isVisibleSearchModalName}
        setIsVisibleModal={setIsVisibleSearchModalName}
        data={uniqueNameCharacter()}
        objectField="name"
        filterContext={filterCharacter}
        setFilterContext={setFilterCharacter}
      />
      <Search
        title="Species"
        isVisibleModal={isVisibleSearchModalSpecies}
        setIsVisibleModal={setIsVisibleSearchModalSpecies}
        data={uniqueSpeciesCharacter()}
        objectField="species"
        filterContext={filterCharacter}
        setFilterContext={setFilterCharacter}
      />
      <HeaderFilter onPress={pressOnApply} pressOnClear={pressOnClear} />

      <Container>
        <CheckBoxSearch
          textTitle="Name"
          textDescription="Give a name"
          filterContext={filterCharacter}
          objectField="name"
          setIsVisibleSearchModal={setIsVisibleSearchModalName}
        />
      </Container>
      <Container>
        <CheckBoxSearch
          textTitle="Species"
          textDescription="Select one"
          filterContext={filterCharacter}
          objectField="species"
          setIsVisibleSearchModal={setIsVisibleSearchModalSpecies}
        />
      </Container>

      <ContainerTitle>
        <TextTitle>Status</TextTitle>
      </ContainerTitle>
      <Container>
        {statusList.map((item) => (
          <CheckBox
            isStatus={true}
            key={item.id}
            textTitle={item.status}
            isLast={statusList.length === item.id}
          />
        ))}
      </Container>

      <ContainerTitle>
        <TextTitle>Gender</TextTitle>
      </ContainerTitle>
      <Container>
        {genderList.map((item) => (
          <CheckBox
            isStatus={false}
            key={item.id}
            textTitle={item.gender}
            isLast={genderList.length === item.id}
          />
        ))}
      </Container>
    </SafeAreaView>
  )
}

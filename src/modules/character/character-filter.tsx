import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { useFilterCharacter } from 'src/hooks'
import { colors } from 'src/theme/colors'
import { HeaderFilter } from 'src/ui/header-filter'
import { genderList, statusList } from 'src/utils/constants'

import { Search } from '../../ui/search'
import { useFilterContext } from '../filter-context'
import { uniqueName, uniqueSpecies } from '.'
import { CheckBox } from './ui/checkbox/checkbox'
import { CheckBoxSearch } from './ui/checkbox/checkbox-search'

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
  const { pressOnApply } = useFilterCharacter()
  const {
    isVisibleSearchModalName,
    isVisibleSearchModalSpecies,
    setIsVisibleSearchModalName,
    setIsVisibleSearchModalSpecies,
  } = useFilterContext()

  return (
    <SafeAreaView style={{ backgroundColor: colors.white[0], flex: 1 }}>
      <Search
        title="Name"
        isVisibleModal={isVisibleSearchModalName}
        setIsVisibleModal={setIsVisibleSearchModalName}
        data={uniqueName()}
        isName={true}
      />
      <Search
        title="Species"
        isVisibleModal={isVisibleSearchModalSpecies}
        setIsVisibleModal={setIsVisibleSearchModalSpecies}
        data={uniqueSpecies()}
        isName={false}
      />
      <HeaderFilter onPress={pressOnApply} />

      <Container>
        <CheckBoxSearch
          textTitle="Name"
          textDescription="Give a name"
          isName={true}
        />
      </Container>
      <Container>
        <CheckBoxSearch
          textTitle="Species"
          textDescription="Select one"
          isName={false}
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

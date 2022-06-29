import React, { ReactElement } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { noop } from 'lodash'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { useFilterContext } from '../filter-context'
import { TextCheckbox } from './text-checkbox'
import { PropCheckbox } from './types'

const Container = styled(BouncyCheckbox)`
  margin-left: 19px;
`

export const CheckBoxSearch = ({
  textTitle,
  textDescription,
  isName,
}: PropCheckbox): ReactElement => {
  const {
    setIsVisibleSearchModalName,
    setIsVisibleSearchModalSpecies,
    filterContext,
  } = useFilterContext()

  return (
    <Container
      size={22}
      disableBuiltInState={true}
      fillColor={colors.indigo}
      unfillColor={colors.white[0]}
      isChecked={
        isName
          ? filterContext.name.length > 0
          : filterContext.species.length > 0
      }
      textComponent={
        <TextCheckbox textTitle={textTitle} textDescription={textDescription} />
      }
      iconStyle={{ borderColor: colors.grey[2] }}
      useNativeDriver={true}
      onPress={() => {
        isName
          ? setIsVisibleSearchModalName(true)
          : setIsVisibleSearchModalSpecies(true)
      }}
    />
  )
}

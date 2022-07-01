import React, { ReactElement } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { TextCheckbox } from './text-checkbox'

const Container = styled(BouncyCheckbox)`
  margin-left: 19px;
`

interface PropCheckboxSearch<T> {
  textTitle: string
  textDescription: string
  objectField: keyof T
  filterContext: T
  setIsVisibleSearchModal: (value: boolean) => void
}

export const CheckBoxSearch = <
  T extends { [K in keyof T]: T[K] extends string ? string : never },
>({
  textTitle,
  textDescription,
  objectField,
  filterContext,
  setIsVisibleSearchModal,
}: PropCheckboxSearch<T>): ReactElement => {
  return (
    <Container
      size={22}
      disableBuiltInState={true}
      fillColor={colors.indigo}
      unfillColor={colors.white[0]}
      isChecked={filterContext[objectField].length > 0}
      textComponent={
        <TextCheckbox textTitle={textTitle} textDescription={textDescription} />
      }
      iconStyle={{ borderColor: colors.grey[2] }}
      useNativeDriver={true}
      onPress={() => {
        setIsVisibleSearchModal(true)
      }}
    />
  )
}

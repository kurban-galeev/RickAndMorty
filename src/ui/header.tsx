import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface Props {
  title?: string
  children?: ReactNode
  onPress?: () => void
}
const HeaderBlock = styled.View`
  margin: 10px 16px;
`
const Title = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.41px;
  padding-top: 25px;
  color: ${colors.greenDark};
`
const FilterText = styled.Text`
  color: ${colors.indigo}
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
`
const Filter = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  right: 16px;
`

export const Header = ({ children, title, onPress }: Props) => {
  return (
    <HeaderBlock>
      <Filter onPress={onPress} activeOpacity={0.2}>
        <FilterText>Filter</FilterText>
      </Filter>
      <Title>{title}</Title>

      {children}
    </HeaderBlock>
  )
}

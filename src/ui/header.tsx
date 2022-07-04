import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface Props {
  title?: string
  children?: ReactNode
  onPress?: () => void
  isFilter?: boolean
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
  flex-direction: row;
  align-items: center;
  z-index: 1;
  right: 16px;
`
const Circle = styled.View`
  margin-right: 6px;
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background: ${colors.indigo};
`

export const Header = ({ children, title, onPress, isFilter }: Props) => {
  return (
    <HeaderBlock>
      <Filter onPress={onPress} activeOpacity={0.2}>
        {!isFilter && <Circle />}
        <FilterText>Filter</FilterText>
      </Filter>
      <Title>{title}</Title>

      {children}
    </HeaderBlock>
  )
}

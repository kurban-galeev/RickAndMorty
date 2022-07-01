import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface PropLocation {
  name: string
  type: string
}

const Container = styled.TouchableOpacity`
  margin: 9px 5px 5px 16px;
  border-width: 1px;
  border-color: ${colors.white[1]};
  border-radius: 8px;
  width: 163px;
  height: 80px;
`
const TextType = styled.Text`
  max-height: 30px;
  padding: 12px 12px 0 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.grey[0]};
`
const TextName = styled(TextType)`
  padding: 0 0 0 12px;
  max-height: 50px;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`

export const ItemLocation = ({ name, type }: PropLocation): ReactElement => {
  return (
    <Container activeOpacity={0.8}>
      <TextType>{type}</TextType>
      <TextName>{name}</TextName>
    </Container>
  )
}

import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface PropLocation {
  name: string
  type: string
  onPress: () => void
}

const Container = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${colors.white[1]};
  border-radius: 8px;
  width: 100%;
  max-width: 165px;
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

export const ItemLocation = ({
  name,
  type,
  onPress,
}: PropLocation): ReactElement => {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <TextType>{type}</TextType>
      <TextName>{name}</TextName>
    </Container>
  )
}

import React, { ReactElement } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface PropCharacter {
  status: string | null | undefined
  image: string | null | undefined
  name: string | null | undefined
}

const Container = styled.View`
  margin: 9px 5px 11px 9px;
  border-width: 1px;
  border-color: ${colors.white[1]};
  border-radius: 8px;
  width: 163px;
  height: 219px;
`
const TextStatuse = styled.Text`
  padding: 12px 12px 0 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.grey[2]};
`
const TextName = styled(TextStatuse)`
  padding: 0 0 0 12px;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`

export const ItemCharacter = ({
  status,
  image,
  name,
}: PropCharacter): ReactElement => {
  return (
    <Container>
      <Image style={{ height: 140 }} source={{ uri: image ?? undefined }} />
      <TextStatuse>{status}</TextStatuse>
      <TextName>{name}</TextName>
    </Container>
  )
}

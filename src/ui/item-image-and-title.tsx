import React, { ReactElement, useContext } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useFilterCharacter } from 'src/modules/character/filter-context'
import { CharacterProp } from 'src/modules/character/types'
import { RoutesEnum } from 'src/navigation/routes-enum'
import { colors } from 'src/theme/colors'

interface PropCharacter {
  status: string | null | undefined
  image: string | null | undefined
  name: string | null | undefined
  id: string
}

const Container = styled.TouchableOpacity`
  margin: 0px;
  border-width: 1px;
  border-color: ${colors.white[1]};
  border-radius: 8px;
  width: 100%;
  height: 219px;
  max-width: 165px;
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
  max-height: 50px;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`

export const ItemImageAndTitle = ({
  status,
  image,
  name,
  id,
}: PropCharacter): ReactElement => {
  const { navigate } = useNavigation<CharacterProp>()
  const { setIdDetail } = useFilterCharacter()

  const pressOnItem = () => {
    setIdDetail(id)
    navigate(RoutesEnum.CHARACTER_DETAIL)
  }

  return (
    <Container activeOpacity={0.8} onPress={() => pressOnItem()}>
      <Image
        style={{ height: 140, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        source={{ uri: image ?? undefined }}
      />
      <TextStatuse>{status}</TextStatuse>
      <TextName>{name}</TextName>
    </Container>
  )
}

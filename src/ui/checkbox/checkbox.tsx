import React, { ReactElement } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import styled from 'styled-components/native'

import { useFilterCharacter } from 'src/modules/character/filter-context'
import { PropCheckbox } from 'src/modules/character/types'
import { colors } from 'src/theme/colors'

const Container = styled(BouncyCheckbox)`
  margin-left: 19px;
`
const TextTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`
const ContainerText = styled.View<PropCheckbox>`
  width: 100%;
  padding: 10px 0;
  margin-left: 17px;
  border-color: ${colors.grey[2]}
  border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)}px;
`

export const CheckBox = ({
  textTitle,
  isLast,
  isStatus,
}: PropCheckbox): ReactElement => {
  const { setFilterCharacter, filterCharacter } = useFilterCharacter()

  return (
    <Container
      size={22}
      disableBuiltInState={true}
      fillColor={colors.indigo}
      unfillColor={colors.white[0]}
      isChecked={
        isStatus
          ? filterCharacter.status === textTitle
          : filterCharacter.gender === textTitle
      }
      textComponent={
        <ContainerText isLast={isLast}>
          <TextTitle>{textTitle}</TextTitle>
        </ContainerText>
      }
      iconStyle={{ borderColor: colors.grey[2] }}
      useNativeDriver={true}
      onPress={() => {
        isStatus
          ? textTitle &&
            setFilterCharacter({ ...filterCharacter, status: textTitle })
          : textTitle &&
            setFilterCharacter({ ...filterCharacter, gender: textTitle })
      }}
    />
  )
}

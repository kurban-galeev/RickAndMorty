import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

import { PropCheckbox } from 'src/modules/character/types'
import { colors } from 'src/theme/colors'
import { Arrow } from 'src/ui/icons'

const ContainerText = styled.View`
  margin: 10px 0 10px 16px;
`
const Container = styled.View`
  justify-content: space-between;
  margin-right: 16px;
  align-items: center;
  flex-direction: row;
  width: 100%;
`

const TextTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`
const TextDescription = styled(TextTitle)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.grey[0]};
`
const ContainerArrow = styled.View`
  margin-right: 50px;
`

export const TextCheckbox = ({
  textTitle,
  textDescription,
}: PropCheckbox): ReactElement => {
  return (
    <Container>
      <ContainerText>
        <TextTitle>{textTitle}</TextTitle>
        <TextDescription>{textDescription}</TextDescription>
      </ContainerText>
      <ContainerArrow>
        <Arrow />
      </ContainerArrow>
    </Container>
  )
}

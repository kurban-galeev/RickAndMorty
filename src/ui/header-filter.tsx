import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

interface Props {
  title?: string
  children?: ReactNode
  onPress?: () => void
}
const HeaderBlock = styled.View`
  height: 44px;
  flex-direction: row;
  justify-content: space-between;
  background: ${colors.white[0]};
`
const Title = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.greenDark};
`
const ContainerButton = styled.View`
  justify-content: flex-end;
`
const ButtonApply = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 28px;
  right: 15px;
  top: 10px;
  background: ${colors.indigo};
  border-radius: 14px;
`
const ButtonText = styled(Title)`
  font-size: 13px;
  line-height: 18px;
  color: ${colors.white[0]};
`

export const HeaderFilter = ({
  children,
  title = 'Filter',
  onPress,
}: Props) => {
  return (
    <HeaderBlock>
      <Title>{title}</Title>
      <ContainerButton>
        <ButtonApply onPress={onPress}>
          <ButtonText>APPLY</ButtonText>
        </ButtonApply>
      </ContainerButton>
      {children}
    </HeaderBlock>
  )
}

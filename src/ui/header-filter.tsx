import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

import { useFilterContext } from 'src/modules/filter-context'
import { colors } from 'src/theme/colors'
import { defaultFilter } from 'src/utils/constants'

interface Props {
  title?: string
  children?: ReactNode
  onPress?: () => void
}
const HeaderBlock = styled.View`
  height: 60px;
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
  color: ${colors.greenDark};
`
const ContainerButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  left: 16px;
  top: 10px;
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
const ContainerTitle = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

const TextClear = styled(Title)`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.indigo};
`

export const HeaderFilter = ({
  children,
  title = 'Filter',
  onPress,
}: Props) => {
  const { setFilterContext } = useFilterContext()

  const pressOnClear = () => {
    setFilterContext(defaultFilter)
  }

  return (
    <HeaderBlock>
      <ContainerButton onPress={pressOnClear}>
        <TextClear>Clear</TextClear>
      </ContainerButton>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      <ButtonApply onPress={onPress}>
        <ButtonText>APPLY</ButtonText>
      </ButtonApply>
      {children}
    </HeaderBlock>
  )
}

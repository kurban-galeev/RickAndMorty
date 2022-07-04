import React, { ReactElement } from 'react'
import { useNavigation } from '@react-navigation/native'
import { toString } from 'lodash'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { Back } from './back'

const Header = styled.View`
  flex-direction: row;
`
const Title = styled.Text`
  max-width: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.greenDark};
`
const ContainerTitle = styled.View`
  margin: 15px 0;
  width: 100%;
  align-items: center;
`
interface Props {
  title: string | undefined
}

export const HeaderDetail = ({ title }: Props): ReactElement => {
  const { goBack } = useNavigation()

  return (
    <Header>
      <Back closeModal={goBack} />

      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
    </Header>
  )
}

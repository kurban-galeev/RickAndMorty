import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { ArrowBack } from './icons'

interface Prop {
  closeModal: () => void
}

const ContainerBack = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 8.5px;
  top: 15px;
`

const TextBack = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  padding: 0 0 0 5.5px;
  color: ${colors.indigo};
`

export const Back = ({ closeModal }: Prop) => {
  return (
    <ContainerBack onPress={closeModal}>
      <ArrowBack />
      <TextBack>Back</TextBack>
    </ContainerBack>
  )
}

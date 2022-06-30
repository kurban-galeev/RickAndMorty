import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Micro, SearchIcon } from 'src/ui/icons'

interface Prop {
  value: string
  setValue: (value: string) => void
}

const InputeText = styled.TextInput`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  height: 36px;
  background: ${colors.white[1]};
`
const Container = styled.View`
  flex-direction: row;
`
const ContainerSearchIcon = styled.View`
  position: absolute;
  z-index: 1;
  top: 11px;
  left: 10px;
`
const ContainerMicro = styled.View`
  position: absolute;
  top: 8px;
  right: 10px;
`

export const Input = ({ value, setValue }: Prop) => {
  return (
    <Container>
      <ContainerSearchIcon>
        <SearchIcon />
      </ContainerSearchIcon>

      <InputeText
        placeholder="Search"
        placeholderTextColor={colors.grey[0]}
        value={value}
        onChangeText={(text: string) => {
          if (text.length <= 40) {
            setValue(text)
          }
        }}
      />

      <ContainerMicro>
        <Micro />
      </ContainerMicro>
    </Container>
  )
}

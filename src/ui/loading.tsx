import React, { ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const ContainerLoading = styled.View`
  height: 100%
  align-items: center;
  justify-content: center;
`

export const Loading = (): ReactElement => {
  return (
    <ContainerLoading>
      <ActivityIndicator size="large" color={colors.black} />
    </ContainerLoading>
  )
}

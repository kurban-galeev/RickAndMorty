import React, { ReactElement } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { HeaderFilter } from 'src/ui/header-filter'

const Container = styled.View`
  background: ${colors.white[0]};
`

export const CharacterFilter = (): ReactElement => {
  // const { pressOnApply } = useFilter()

  return (
    <SafeAreaView>
      {/* <HeaderFilter onPress={pressOnApply} /> */}
      <Container>
        <Text>Filter</Text>
      </Container>
    </SafeAreaView>
  )
}

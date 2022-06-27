import React from 'react'
import { Image, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styled from 'styled-components/native'

import { RoutesEnum } from 'src/navigation/routes-enum'
import { colors } from 'src/theme/colors'
import { MainParamList } from 'src/types'
import { Button } from 'src/ui/button'

const Container = styled.View`
  flex: 1;
  background: ${colors.greenDark};
  align-items: center;
  justify-content: space-around;
`
const ContainerBottom = styled.View`
  align-items: center;
`

export const WelcomeScreen = () => {
  type MainProp = NativeStackNavigationProp<MainParamList>
  const { navigate } = useNavigation<MainProp>()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Image source={require('assets/images/pixelWolf.png')} />
        <Image source={require('assets/images/logo.png')} />

        <ContainerBottom>
          <Button
            onPress={() => Linking.openURL('http://bit.ly/rick-and-morty-ios')}
            title="GET THE INSTRUCTIONS"
            colorBorder={colors.green}
            colorText={colors.green}
          />
          <Button
            onPress={() => navigate(RoutesEnum.TAB_BAR)}
            title="START PROTOTYPE"
            colorBackground={colors.green}
            colorBorder={colors.green}
            colorText={colors.greenDark}
            marginTop={20}
          />
        </ContainerBottom>
      </Container>
    </SafeAreaView>
  )
}

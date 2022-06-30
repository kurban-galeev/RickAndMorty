import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharacterFilter } from 'src/modules/character/character-filter'
import { DetailScreen } from 'src/modules/character/detail-screen'
import { WelcomeScreen } from 'src/modules/welcome-screen'

import { RoutesEnum } from './routes-enum'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={RoutesEnum.WELCOME}>
        <Stack.Screen
          name={RoutesEnum.WELCOME}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.CHARACTER_FILTER}
          component={CharacterFilter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.CHARACTER_DETAIL}
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.LOCATION_FILTER}
          component={CharacterFilter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.EPISODE_FILTER}
          component={CharacterFilter}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={RoutesEnum.TAB_BAR} component={TabBar} />
      </Stack.Navigator>
    </React.Fragment>
  )
}

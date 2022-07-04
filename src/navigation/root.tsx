import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharacterFilter } from 'src/modules/character/character-filter'
import { DetailCharacter } from 'src/modules/character/detail-character'
import { DetailEpisode } from 'src/modules/episode/detail-episode'
import { EpisodeFilter } from 'src/modules/episode/episode-filter'
import { DetailLocation } from 'src/modules/location/detail-location'
import { LocationFilter } from 'src/modules/location/location-filter'
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
          component={DetailCharacter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.LOCATION_FILTER}
          component={LocationFilter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.LOCATION_DETAIL}
          component={DetailLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.EPISODE_FILTER}
          component={EpisodeFilter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.EPISODE_DETAIL}
          component={DetailEpisode}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={RoutesEnum.TAB_BAR} component={TabBar} />
      </Stack.Navigator>
    </React.Fragment>
  )
}

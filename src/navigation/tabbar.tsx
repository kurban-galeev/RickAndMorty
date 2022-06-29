import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'
import { BottomTabsParamList } from 'src/types'
import { Planet, Rocket, TV } from 'src/ui/icons'

import { RoutesEnum } from './routes-enum'

const Tab = createBottomTabNavigator<BottomTabsParamList>()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={RoutesEnum.CHARACTER}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.indigo,
      }}>
      <Tab.Screen
        name={RoutesEnum.CHARACTER}
        key={RoutesEnum.CHARACTER}
        component={CharacterScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Character',
          tabBarIcon: ({ focused }) => (
            <Rocket color={focused ? colors.indigo : colors.grey[0]} />
          ),
        }}
      />
      <Tab.Screen
        name={RoutesEnum.LOCATION}
        key={RoutesEnum.LOCATION}
        component={LocationScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Location',
          tabBarIcon: ({ focused }) => (
            <Planet color={focused ? colors.indigo : colors.grey[0]} />
          ),
        }}
      />

      <Tab.Screen
        name={RoutesEnum.EPISODE}
        key={RoutesEnum.EPISODE}
        component={EpisodeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => (
            <TV color={focused ? colors.indigo : colors.grey[0]} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

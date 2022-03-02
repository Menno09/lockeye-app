import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../../screens'
import { HomeStackParamList } from './HomeStackParamList'

const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LogsScreen } from '../../screens'
import { LogsStackParamList } from './LogsStackParamList'

const Stack = createStackNavigator<LogsStackParamList>()

const LogsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logs"
        component={LogsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default LogsStack

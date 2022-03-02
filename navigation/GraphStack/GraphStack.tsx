import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GraphOverviewScreen } from '../../screens'
import { GraphStackParamList } from './GraphStackParamList'

const Stack = createStackNavigator<GraphStackParamList>()

const GraphStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Graph"
        component={GraphOverviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default GraphStack

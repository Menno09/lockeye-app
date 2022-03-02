import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ProfileOverviewScreen, LocationScreen, DeviceScreen } from '../../screens'
import { ProfileStackParamList } from './ProfileStackParamList'

const Stack = createStackNavigator<ProfileStackParamList>()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileOverview"
        component={ProfileOverviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileOverviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeviceScreen"
        component={DeviceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack

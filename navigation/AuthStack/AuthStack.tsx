import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthOverviewScreen, LoginScreen, RegisterScreen } from '../../screens'
import { AuthStackParamList } from './AuthStackParamList'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthOverview"
        component={AuthOverviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack

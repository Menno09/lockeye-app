import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Appstack from '../Appstack/Appstack'
import AuthStack from '../AuthStack/AuthStack'
import { RootStackParamList } from './RootStackParamList'
import ModalScreen from '../../screens/ModalScreen'

const Stack = createStackNavigator<RootStackParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AuthStack"
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppStack" component={Appstack} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Notifications" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default RootStack

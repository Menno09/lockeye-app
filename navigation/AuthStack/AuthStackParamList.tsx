import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'

import { RootStackNavigationProp } from '../RootStack/RootStackParamList'

export type AuthStackParamList = {
  AuthOverview: undefined
  Login: undefined
  Register: undefined
}

// make it zo only the props from AuthStackParamList can be used on this route 
export type AuthStackNavigationProp<Route extends keyof AuthStackParamList> =
  CompositeNavigationProp<
    RootStackNavigationProp<'AuthStack'>,
    StackNavigationProp<AuthStackParamList, Route>
  >

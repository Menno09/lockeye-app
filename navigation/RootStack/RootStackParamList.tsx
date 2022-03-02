import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  AuthStack: undefined
  AppStack: undefined
  Notifications: undefined
}

// make it zo only the props from RootStackParamList can be used on this route 
export type RootStackNavigationProp<Route extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, Route>

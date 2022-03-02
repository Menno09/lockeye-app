import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'

import { RootStackNavigationProp } from '../RootStack/RootStackParamList'

export type AppStackParamList = {
  HomeStack: undefined
  GraphStack: undefined
  LogsStack: undefined
  ProfileStack: undefined
  Notifications: undefined
}

// make it zo only the props from AppStackParamList can be used on this route 
export type AppStackNavigationProp<Route extends keyof AppStackParamList> =
  CompositeNavigationProp<
    RootStackNavigationProp<'AppStack'>,
    BottomTabNavigationProp<AppStackParamList, Route>
  >

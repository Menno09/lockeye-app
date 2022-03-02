import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'

import { AppStackNavigationProp } from '../Appstack/AppStackParamList'

export type HomeStackParamList = {
  Home: undefined
}

// make it zo only the props from HomeStackParamList can be used on this route 
export type HomeStackNavigationProp<Route extends keyof HomeStackParamList> =
  CompositeNavigationProp<
    AppStackNavigationProp<'HomeStack'>,
    StackNavigationProp<HomeStackParamList, Route>
  >

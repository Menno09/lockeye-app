import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'

import { AppStackNavigationProp } from '../Appstack/AppStackParamList'

export type GraphStackParamList = {
  Graph: undefined
}

// make it zo only the props from GraphStackParamList can be used on this route 
export type GraphStackNavigationProp<Route extends keyof GraphStackParamList> =
  CompositeNavigationProp<
    AppStackNavigationProp<'GraphStack'>,
    StackNavigationProp<GraphStackParamList, Route>
  >

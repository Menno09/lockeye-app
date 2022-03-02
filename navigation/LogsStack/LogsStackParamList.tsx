import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'

import { AppStackNavigationProp } from '../Appstack/AppStackParamList'

export type LogsStackParamList = {
  Logs: undefined
}

// make it zo only the props from LogsStackParamList can be used on this route 
export type LogsStackNavigationProp<Route extends keyof LogsStackParamList> =
  CompositeNavigationProp<
    AppStackNavigationProp<'LogsStack'>,
    StackNavigationProp<LogsStackParamList, Route>
  >

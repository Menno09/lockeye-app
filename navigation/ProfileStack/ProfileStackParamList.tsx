import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'
import { AppStackNavigationProp } from '../Appstack/AppStackParamList'

export type ProfileStackParamList = {
  ProfileOverview: undefined
  ProfileSettings: undefined
  Location: undefined
  DeviceScreen: undefined
}

// make it zo only the props from ProfileStackParamList can be used on this route 
export type ProfileStackNavigationProp<
  Route extends keyof ProfileStackParamList
> = CompositeNavigationProp<
  AppStackNavigationProp<'ProfileStack'>,
  StackNavigationProp<ProfileStackParamList, Route>
>

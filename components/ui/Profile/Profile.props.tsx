import { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export default interface ProfileProps {
  name?: string
  group?: string

  onPress: () => void
  style?: ViewStyle | ViewStyle[]
}

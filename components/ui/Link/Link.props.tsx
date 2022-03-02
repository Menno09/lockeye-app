import { ReactNode } from 'react'
import { TextStyle, ViewStyle } from 'react-native'

export default interface LinkProps {
  children: ReactNode | ReactNode[]
  color?: string
  disabled?: boolean
  hasLine?: boolean
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]

  onPress: () => void
}

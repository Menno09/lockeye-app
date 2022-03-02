import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ViewStyle, TextStyle } from 'react-native'

export default interface LinkProps {
  children?: string
  theme: 'primary' | 'primaryOutline' | 'secondery' | 'seconderyOutline'
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  isDisabled?: boolean
  isLoading?: boolean

  iconLeft?: IconProp
  iconRight?: IconProp
  iconColor?: string
  iconSize?: number

  onPress: () => void
}

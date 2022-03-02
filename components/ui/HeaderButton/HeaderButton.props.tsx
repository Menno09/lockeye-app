import { ViewStyle, ImageSourcePropType } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default interface HeaderButtonProps {
  icon: IconProp
  iconSize: number
  iconColor: string

  style?: ViewStyle | ViewStyle[]

  onPress: () => void
}

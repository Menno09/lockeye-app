import { ViewStyle, ImageSourcePropType } from 'react-native'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default interface HeaderlogoProps {
  source: ImageSourcePropType
  title: string
  style?: ViewStyle | ViewStyle[]
}

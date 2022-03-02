import { ReactNode } from 'react'
import { ImageSourcePropType, ViewStyle } from 'react-native'

export default interface AuthBackgroundImageProps {
  children: ReactNode | ReactNode[]
  source: ImageSourcePropType
  style?: ViewStyle | ViewStyle[]
}

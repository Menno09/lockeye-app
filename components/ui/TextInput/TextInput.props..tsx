import { ViewStyle, TextInputProps as NativeTextInputProps } from 'react-native'

export default interface TextInputProps extends NativeTextInputProps {
  label?: string
  placeholder?: string
  value: string
  error?: string | false
  style?: ViewStyle | ViewStyle[]

  onChange?: () => void
}

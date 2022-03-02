import { ViewStyle } from 'react-native'

export default interface LogItemProps {
  title: string
  date: string
  events: {
    risk: string
    hasScaned: boolean
    doorbell: boolean
    doorUnlocked: boolean
    eventTime: string
  }
  style?: ViewStyle | ViewStyle[]
}

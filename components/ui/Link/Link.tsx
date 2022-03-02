import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

import Props from './Link.props'
import { typings } from '../../../theme'

const Link = ({
  color,
  hasLine = false,
  children,
  onPress,
  style,
  disabled = false,
  textStyle,
}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[!!style && style, disabled && styles.disabled]}
    >
      <Text
        style={[
          styles.textStyle,
          hasLine && styles.underline,
          { color },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    ...typings.bold,
  },
  disabled: {
    opacity: 0.3,
  },
  underline: {
    textDecorationLine: 'underline',
  },
})

export default Link

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable, StyleSheet } from 'react-native'

import Props from './HeaderButton.props'

const HeaderButton = ({ icon, iconSize, iconColor, onPress, style }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, !!style && style]}>
      <FontAwesomeIcon icon={icon} color={iconColor} size={iconSize} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HeaderButton

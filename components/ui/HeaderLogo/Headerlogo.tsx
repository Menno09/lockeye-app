import React from 'react'
import Props from './Headerlogo.props'
import { View, Text, Image, StyleSheet } from 'react-native'
import { colors, margins, typings } from '../../../theme'

const HeaderLogo = ({ source, title, style }: Props) => {
  return (
    <View style={[styles.container, !!style && style]}>
      <Image source={source} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typings.h5,
    color: colors.pink,
    marginTop: margins.xxs,
  },
  logo: {
    marginRight: margins.sm,
    // marginBottom: margins.md
  },
})

export default HeaderLogo

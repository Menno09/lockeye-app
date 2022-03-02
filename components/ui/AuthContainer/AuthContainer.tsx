import React from 'react'
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'

import Props from './AuthContainer.props'

const screenWidth = Math.round(Dimensions.get('window').width)

const screenHeight = Math.round(Dimensions.get('window').height)

const AuthContainer = ({ children, source, style }: Props) => {
  return (
    <View style={!!style && style}>
      <View style={styles.container}>
        <ImageBackground
          source={source}
          resizeMode="cover"
          style={styles.image}
        >
          {children}
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: screenHeight + 25,
  },
})

export default AuthContainer

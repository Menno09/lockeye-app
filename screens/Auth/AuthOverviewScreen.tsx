import React from 'react'

import { StyleSheet, Image, View, Text } from 'react-native'
import { AuthContainer, Button, Link } from '../../components/ui'
import { AuthStackNavigationProp } from '../../navigation/AuthStack/AuthStackParamList'
import { colors, fontSizes, margins, typings } from '../../theme'

const AuthOverviewScreen = ({ navigation }: Props) => {
  return (
    <AuthContainer
      source={require('../../assets/images/bg.png')}
      style={styles.bgImage}
    >
      <View style={styles.body}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Login')}
            theme={'seconderyOutline'}
            style={styles.button}
            textStyle={styles.textLogin}
          >
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate('Register')}
            theme={'secondery'}
            textStyle={styles.textRegister}
            style={styles.button}
          >
            Register
          </Button>
          <Link
            hasLine
            style={styles.disclaimer}
            textStyle={styles.textStyle}
            onPress={() => navigation.navigate('AppStack')}
          >
            Watch demo video
          </Link>
        </View>
      </View>
    </AuthContainer>
  )
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: margins.xxxl,
    marginBottom: margins.xxxl,
  },
  buttonContainer: {
    marginTop: margins.xxxl,
    alignSelf: 'stretch',
    marginRight: margins.xl,
    marginLeft: margins.xl,
  },
  button: {
    marginTop: margins.xl,
  },
  textRegister: {
    ...typings.h5,
    color: colors.black,
  },
  textLogin: {
    ...typings.h5,
    color: colors.white,
  },
  textStyle: {
    color: colors.white,
  },
  disclaimer: {
    ...typings.bold,
    textDecorationLine: 'underline',
    marginTop: margins.xxxl,
    alignSelf: 'center',
    color: colors.white,
  },
})

export default AuthOverviewScreen

type Props = {
  navigation: AuthStackNavigationProp<'AuthOverview'>
}

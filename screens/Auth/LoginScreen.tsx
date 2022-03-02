import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
} from 'react-native'
import * as Application from 'expo-application'

import { AuthContainer, Button, Link } from '../../components/ui'
import { AuthStackNavigationProp } from '../../navigation/AuthStack/AuthStackParamList'
import { useStores } from '../../stores'

import { colors, typings, margins } from '../../theme'

const LoginScreen = ({ navigation }: Props) => {
  const [pincode, setPincode] = useState<string>('')
  const [isLoading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const { UserStore } = useStores()

  const getPincode = (value: string) => {
    if (pincode.length > 3) {
      setErrorMsg('Pincode can only be 4 numbers')
    } else {
      setPincode((pincode) => pincode + value)
    }
  }

  const handleSubmit = async (pincode: string) => {
    if (pincode.length > 2) {
      setLoading(true)
      try {
        let mobile_id
        if (Platform.OS === 'ios') {
          mobile_id = await Application.getIosIdForVendorAsync()
        } else {
          mobile_id = Application.androidId
        }
        await UserStore.login(pincode, mobile_id)
        return navigation.navigate('AppStack')
      } catch (e: any) {
        if (e.response?.status === 404) {
          setErrorMsg('Pincode is verkeerd')
        } else {
          setErrorMsg('Oeps iets ging er verkeerd')
        }
      } finally {
        setLoading(false)
      }
    }
    setErrorMsg('Pincode moet 4 cijfers')
  }

  const cleanUp = () => {
    setErrorMsg('')
    setPincode('')
  }

  return (
    <AuthContainer
      style={styles.bgImage}
      source={require('../../assets/images/bg.png')}
    >
      <View style={styles.body}>
        <TextInput
          style={styles.password}
          secureTextEntry={true}
          value={pincode}
          placeholder="Enter Pincode"
          editable={false}
          selectTextOnFocus={false}
          textAlign={'center'}
        />
        <Text style={styles.error}>{errorMsg}</Text>
        <View style={styles.containerNumPad}>
          <View style={styles.row}>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('1')}
              theme={'secondery'}
            >
              1
            </Button>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('2')}
              theme={'secondery'}
            >
              2
            </Button>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('3')}
              theme={'secondery'}
            >
              3
            </Button>
          </View>
          <View style={styles.row}>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('4')}
              theme={'secondery'}
            >
              4
            </Button>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('5')}
              theme={'secondery'}
            >
              5
            </Button>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('6')}
              theme={'secondery'}
            >
              6
            </Button>
          </View>
          <View style={styles.row}>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('7')}
              theme={'secondery'}
            >
              7
            </Button>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('8')}
              theme={'secondery'}
            >
              8
            </Button>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('9')}
              theme={'secondery'}
            >
              9
            </Button>
          </View>
          <View style={styles.row}>
            {/* TODO: BUG 0 button werkt niet wss styling valt er voerheen onplus werkt wel */}
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={() => getPincode('0')}
              theme={'secondery'}
            >
              0
            </Button>
            <Pressable style={styles.clear} onPress={() => cleanUp()}>
              <Text>Clear</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footerblock}>
          <Link
            hasLine
            style={styles.loginEmail}
            textStyle={styles.textStyle}
            onPress={() => {}}
          >
            Login with e-mail
          </Link>
          <Button
            isLoading={isLoading}
            style={styles.loginButton}
            textStyle={styles.loginText}
            onPress={() => handleSubmit(pincode)}
            theme={'secondery'}
          >
            Login
          </Button>
        </View>
      </View>
    </AuthContainer>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  body: {
    marginTop: margins.mega,
    flex: 1,
    alignItems: 'center',
  },
  password: {
    ...typings.h2,
    color: colors.white,
    marginTop: margins.xl,
    alignSelf: 'center',
  },
  containerNumPad: {
    flex: 2,
    marginTop: margins.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  loginButton: {
    alignSelf: 'center',
    width: '80%',
  },
  textStyle: {
    color: colors.white,
  },
  buttonText: {
    ...typings.h2,
    color: colors.black,
  },
  button: {
    padding: margins.sm,
  },
  loginEmail: {
    marginBottom: margins.md,
    alignSelf: 'center',
  },
  loginText: {
    ...typings.h5,
    color: colors.black,
  },
  footerblock: {
    flex: 3,
    width: '90%',
    justifyContent: 'flex-end',
    marginBottom: margins.mega,
  },
  clear: {
    position: 'absolute',
    right: 30,
    top: 30,
    color: colors.white,
  },
  error: {
    ...typings.light,
    color: colors.white,
  },
})

type Props = {
  navigation: AuthStackNavigationProp<'Login'>
}

export default LoginScreen
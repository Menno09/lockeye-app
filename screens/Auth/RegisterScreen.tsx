import React, { useState } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import * as Application from 'expo-application'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { AuthStackNavigationProp } from '../../navigation/AuthStack/AuthStackParamList'
import { colors, typings, margins } from '../../theme'
import { AuthContainer, Button, TextInput } from '../../components/ui'
import { Validation } from '../../constants'

import { useStores } from '../../stores'

const RegisterScreen = ({ navigation }: Props) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { UserStore } = useStores()

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email(Validation.invalidEmail)
      .required(Validation.required),
    name: Yup.string().required(Validation.required),
    password: Yup.string()
      .required(Validation.noPassword)
      .min(8, Validation.toShortPassword)
      .matches(Validation.hasnumber, Validation.passwordHasNumber),
    passwordConfirm: Yup.string()
      .required(Validation.noPassword)
      .min(8, Validation.toShortPassword)
      .matches(Validation.hasnumber, Validation.passwordHasNumber),
    pincode: Yup.string()
      .required(Validation.noPassword)
      .matches(Validation.hasnumber),
  })

  const handleSubmit = async (value: {
    email: string
    password: string
    passwordConfirm: string
    pincode: string
    name: string
  }) => {
    if (value.password === value.passwordConfirm) {
      setLoading(true)
      try {
        let mobile_id
        if (Platform.OS === 'ios') {
          mobile_id = await Application.getIosIdForVendorAsync()
        } else {
          mobile_id = Application.androidId
        }
        await UserStore.register(
          value.email,
          value.password,
          value.name,
          value.pincode,
          mobile_id
        )
        return navigation.navigate('Login')
      } catch (e: any) {
        if (e.response?.status === 422) {
          setError('Username already been used')
        } else {
          setError('Oops sometime went wrong.')
        }
      } finally {
        setLoading(false)
      }
    }
    setError(`Password don't match`)
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        passwordConfirm: '',
        pincode: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
        <AuthContainer
          style={styles.bgImage}
          source={require('../../assets/images/bg.png')}
        >
          <View style={styles.body}>
            <Text style={styles.register}>Register</Text>
            <View style={styles.form}>
              <TextInput
                placeholder="Your e-mailadress"
                keyboardType="email-address"
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                style={styles.form}
                error={values.email.length > 0 ? errors.email : false}
              />
              <TextInput
                placeholder="Your name"
                keyboardType="default"
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                style={styles.form}
                error={values.name.length > 0 ? errors.name : false}
              />
              <TextInput
                placeholder="Your password"
                keyboardType="default"
                secureTextEntry={true}
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                style={styles.form}
                error={values.password.length > 0 ? errors.password : false}
              />
              <TextInput
                placeholder="Confirm password"
                keyboardType="default"
                secureTextEntry={true}
                value={values.passwordConfirm}
                onBlur={handleBlur('passwordConfirm')}
                onChangeText={handleChange('passwordConfirm')}
                style={styles.form}
                error={
                  values.passwordConfirm.length > 0
                    ? errors.passwordConfirm
                    : false
                }
              />
              <Text style={styles.pincodeLabel}>Your pincode</Text>
              <SmoothPinCodeInput
                value={values.pincode}
                containerStyle={styles.pincodeContainer}
                cellStyle={styles.pincode}
                restrictToNumbers
                onTextChange={handleChange('pincode')}
                error={values.pincode.length > 0 ? null : errors.pincode}
              />
            </View>
            <Text>{error}</Text>
            <Button
              isLoading={isLoading}
              style={styles.registerButton}
              textStyle={styles.registerButtonText}
              onPress={handleSubmit}
              theme={'secondery'}
            >
              Register
            </Button>
          </View>
        </AuthContainer>
      )}
    </Formik>
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
  register: {
    ...typings.h2,
    color: colors.white,
    marginTop: margins.md,
    alignSelf: 'center',
  },
  pincodeLabel: {
    ...typings.h5,
    color: colors.white,
    alignSelf: 'center',
  },
  form: {
    marginVertical: margins.sm,
    marginHorizontal: margins.xl,
    alignSelf: 'center',
    width: '90%',
  },
  registerButton: {
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'flex-end',
    marginBottom: margins.xxxl,
    flex: 3,
  },
  registerButtonText: {
    ...typings.h5,
    color: colors.black,
  },
  pincode: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  pincodeContainer: {
    marginVertical: margins.md,
    alignSelf: 'center',
  },
})

export default RegisterScreen

type Props = {
  navigation: AuthStackNavigationProp<'Register'>
}

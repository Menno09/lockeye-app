import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { View, StyleSheet, Text } from 'react-native'
import { Button, TextInput } from '../../components/ui'

import { ProfileStackNavigationProp } from '../../navigation/ProfileStack/ProfileStackParamList'
import { colors, margins, typings } from '../../theme'

import { Validation } from '../../constants'
import { useStores } from '../../stores'

const DeviceScreen = ({ navigation }: Props) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { LockeyeStore } = useStores()

  const AddDevice = Yup.object().shape({
    name: Yup.string().required(Validation.required),
    device_number: Yup.string()
      .required(Validation.noPassword)
      .matches(Validation.hasnumber),
  })

  const handleSubmit = async (value: {
    name: string
    device_number: string
  }) => {
    setLoading(true)
    try {
      LockeyeStore.addLockeye(value.name, value.device_number)
      return navigation.navigate('ProfileOverview')
    } catch (e: any) {
      if (e.response?.status === 422) {
        setError('device bestaat al')
      } else {
        setError('Er is iets verkeerd gegaan.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        device_number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={AddDevice}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
        <View style={styles.container}>
          <Text style={styles.title}> Add your device</Text>
          <TextInput
            placeholder="Your device name"
            keyboardType="default"
            value={values.name}
            onBlur={handleBlur('name')}
            onChangeText={handleChange('name')}
            style={styles.form}
            error={values.name.length > 0 ? errors.name : false}
          />
          <TextInput
            placeholder="Your device serial number"
            keyboardType="numeric"
            value={values.device_number}
            onBlur={handleBlur('device_number')}
            onChangeText={handleChange('device_number')}
            style={styles.form}
            error={
              values.device_number.length > 0 ? errors.device_number : false
            }
          />
          {/* #TODO Make select group */}
          <Button
            isLoading={isLoading}
            textStyle={styles.buttonText}
            style={styles.button}
            onPress={handleSubmit}
            theme={'primaryOutline'}
          >
            Add device
          </Button>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: margins.lg,
    paddingTop: margins.xl,
  },
  profile: {
    marginBottom: margins.lg,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.appleRed,
  },
  button: {
    marginVertical: margins.md,
  },
  form: {
    marginVertical: margins.sm,
    marginHorizontal: margins.xl,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    ...typings.h6,
    color: colors.pink,
  },
})

type Props = {
  navigation: ProfileStackNavigationProp<'DeviceScreen'>
}

export default observer(DeviceScreen)

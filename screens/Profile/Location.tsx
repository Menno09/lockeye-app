import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Location from 'expo-location'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { scale } from 'react-native-size-matters'
import {
  faSearchLocation,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons'

import { Button } from '../../components/ui'
import { ProfileStackNavigationProp } from '../../navigation/ProfileStack/ProfileStackParamList'
import { PermissionStatus } from 'expo-location'
import { colors, margins, typings } from '../../theme'
import { useStores } from '../../stores'

const LocationScreen = ({ navigation }: Props) => {
  const [status, setStatus] = useState<PermissionStatus | undefined>()
  const [ButtonText, setButtonText] = useState<string>('')
  const { DeviceStore } = useStores()

  const requestPromision = async () => {
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({})
      await DeviceStore.SetLoaction(location)
    } else {
      const { status } = await Location.requestForegroundPermissionsAsync()
      setStatus(status)
    }
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      setStatus(status)
      if (status !== 'granted') {
        setButtonText('Give Acces')
      }
      setButtonText('Has loacation acces')
    })()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <FontAwesomeIcon
          icon={status !== 'granted' ? faSearchLocation : faLocationArrow}
          color={colors.pink}
          size={120}
          style={styles.icon}
        />
        <Text style={styles.title}>Location</Text>
      </View>

      <Button
        isDisabled={status === 'granted'}
        style={styles.button}
        onPress={() => requestPromision()}
        theme={'primary'}
      >
        {ButtonText}
      </Button>
    </View>
  )
}

type Props = {
  navigation: ProfileStackNavigationProp<'Location'>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: margins.lg,
    paddingVertical: margins.xl,
    justifyContent: 'center',
  },
  location: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    marginBottom: scale(margins.lg),
    // marginLeft: scale(margins.lg),
  },
  title: {
    ...typings.h1,
    color: colors.pink,
    marginBottom: margins.sm,
  },
  button: {
    flex: 2,
  },
})

export default LocationScreen

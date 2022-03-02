import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import React, { useState, useEffect, useRef } from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Platform, StyleSheet, View, Text, Pressable } from 'react-native'

import { RootStackNavigationProp } from '../navigation/RootStack/RootStackParamList'
import { colors, margins, typings } from '../theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { scale } from 'react-native-size-matters'
import { schedulePushNotification } from '../helpers'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

const ModalScreen = ({ navigation }: Props) => {
  const [expoPushToken, setExpoPushToken] = useState('')
  const [notification, setNotification] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        return setNotification(notification)
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response)
      })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  const registerForPushNotificationsAsync = async () => {
    let token
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log(token)
    } else {
      alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    return token
  }

  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.back}>
          <FontAwesomeIcon icon={faAngleLeft} color={colors.white} />
        </Pressable>
        <Text style={styles.title}>My notifications</Text>
      </View>
      <View style={styles.container}>
        {notification ? (
          <View style={styles.notification}>
            <Text style={styles.notificationTitle}>
              {notification.request.content.title}
            </Text>
            <Text>{notification.request.content.data.data}</Text>
          </View>
        ) : (
          <Text style={styles.noItems}>No notifications</Text>
        )}
        <Pressable
          style={styles.trigger}
          onPress={async () => {
            await schedulePushNotification()
          }}
        ></Pressable>
      </View>
    </View>
  )
}

type Props = {
  navigation: RootStackNavigationProp<'Notifications'>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: margins.lg,
    paddingTop: margins.md,
  },
  title: {
    ...typings.h5,
    color: colors.white,
  },
  noItems: {
    ...typings.small,
    textAlign: 'center',
  },
  notificationTitle: {
    ...typings.h6,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: margins.lg,
    paddingTop: margins.lg,
    paddingBottom: margins.md,
    backgroundColor: colors.pink,
  },
  back: {
    marginRight: margins.mega,
  },
  trigger: {
    paddingVertical: margins.lg,
  },
  notification: {
    borderRadius: 10,
    padding: scale(margins.md),
    backgroundColor: colors.white,
  },
})

export default ModalScreen

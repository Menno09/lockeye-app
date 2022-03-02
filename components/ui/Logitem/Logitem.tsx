import moment from 'moment'
import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { scale } from 'react-native-size-matters'

import { colors, margins, typings } from '../../../theme'
import LogItemProps from './Logitem.props'

const LogItem = (props: LogItemProps) => {
  const [collapsed, setcollapsed] = useState<boolean>(false)

  const time = moment
    .utc(parseFloat(props.events.eventTime) * 60)
    .format('HH:mm:ss')

  return (
    <View style={!!props.style && props.style}>
      <View
        style={[
          styles.container,
          { height: collapsed ? scale(150) : scale(60) },
        ]}
      >
        <View style={styles.head}>
          <View style={styles.labelHead}>
            <Text style={styles.labelTitle}>{props.title}</Text>
            <Text>{props.date}</Text>
            {collapsed && (
              <View>
                <Text>Risk: {props.events.risk}</Text>
                <Text>
                  Has pressed doorbell: {props.events.doorbell ? 'Yes' : 'No'}
                </Text>
                <Text>Has scaned: {props.events.hasScaned ? 'Yes' : 'No'}</Text>
                <Text>
                  Door has unlocked: {props.events.doorUnlocked ? 'Yes' : 'No'}
                </Text>
                <Text>Time duration: {time}</Text>
              </View>
            )}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => setcollapsed(!collapsed)}
          >
            <Text style={styles.buttonText}>
              {collapsed ? 'Close' : 'View'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: scale(margins.sm),
    borderRadius: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  head: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  labelHead: {
    marginVertical: margins.md,
    justifyContent: 'center',
    marginLeft: margins.md,
  },
  labelTitle: {
    ...typings.bold,
  },
  button: {
    backgroundColor: colors.appleRed,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: ,
    borderBottomRightRadius: 10,
    borderTopEndRadius: 10,
    width: scale(50),
    height: '100%',
  },
  buttonText: {
    color: colors.white,
  },
})

export default LogItem

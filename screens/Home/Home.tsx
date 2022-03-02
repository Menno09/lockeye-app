import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { scale } from 'react-native-size-matters'
import { observer } from 'mobx-react'

import { Link, LogItem } from '../../components/ui'
import { HomeStackNavigationProp } from '../../navigation/HomeStack/HomeStackParamList'
import { colors, margins, typings } from '../../theme'
import { useLockeye } from '../../hooks/stateHooks'

const HomeScreen = ({ navigation }: Props) => {
  const LockeyeStore = useLockeye()
  const { activities } = LockeyeStore

  const [mapRegion, setmapRegion] = useState({
    latitude: 52.00575,
    longitude: 6.14462,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  })

  const items = activities.slice(Math.max(activities.length - 3, 0))

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mapView}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Where my keys at?</Text>
          <Link hasLine textStyle={styles.linkText} onPress={() => {}}>
            Go to overview
          </Link>
        </View>
        <MapView region={mapRegion} style={styles.map}>
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
      </View>
      <View style={styles.lastActivities}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Last activities</Text>
          <Link
            textStyle={styles.linkText}
            hasLine
            onPress={() => navigation.navigate('LogsStack')}
          >
            Go to overview
          </Link>
        </View>
        {items.length > 0 ? (
          items.map((item, index) => {
            return (
              <LogItem
                key={index}
                title={item.name}
                date={item.date_created}
                events={{
                  risk: item.risk,
                  hasScaned: item.has_scaned,
                  doorbell: item.doorbell,
                  doorUnlocked: item.door_unlocked,
                  eventTime: item.event_time,
                }}
              />
            )
          })
        ) : (
          <Text style={styles.noItems}>No activities</Text>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: margins.lg,
  },
  title: {
    ...typings.h6,
    color: colors.appleRed,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(margins.md),
  },
  map: {
    width: '100%',
    height: scale(260),
    borderRadius: 15,
  },
  noItems: {
    ...typings.small,
    textAlign: 'center',
  },
  linkText: {
    ...typings.small,
  },
  lastActivities: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  mapView: {
    flex: 2,
    height: '100%',
  },
})

type Props = {
  navigation: HomeStackNavigationProp<'Home'>
}

export default observer(HomeScreen)

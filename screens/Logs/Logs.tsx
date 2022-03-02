import { observer } from 'mobx-react'
import React from 'react'

import { ScrollView, Text, StyleSheet } from 'react-native'
import { LogItem } from '../../components/ui'
import { useLockeye } from '../../hooks/stateHooks'
import { LogsStackNavigationProp } from '../../navigation/LogsStack/LogsStackParamList'
import { margins, typings } from '../../theme'

const LogsScreen = ({ navigation }: Props) => {
  const LockeyeStore = useLockeye()
  const { activities } = LockeyeStore
  return (
    <ScrollView style={styles.container}>
      {activities.length > 0 ? (
        activities.map((item, index) => {
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: margins.lg,
    paddingTop: margins.lg,
  },
  noItems: {
    ...typings.small,
    textAlign: 'center',
  },
})

type Props = {
  navigation: LogsStackNavigationProp<'Logs'>
}
export default observer(LogsScreen)

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react'
import useCachedResources from './hooks/useCachedResources'

import RootNavigation from './navigation/RootNavigation'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default observer(App)

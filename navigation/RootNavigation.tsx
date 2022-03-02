import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootStack from './RootStack/Rootstack'

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default RootNavigation

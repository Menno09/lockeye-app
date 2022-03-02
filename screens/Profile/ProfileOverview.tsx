import React from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react'

import { View, StyleSheet } from 'react-native'
import { Button, Profile } from '../../components/ui'
import { useUser } from '../../hooks/stateHooks'

import { ProfileStackNavigationProp } from '../../navigation/ProfileStack/ProfileStackParamList'
import { colors, margins } from '../../theme'

const ProfileOverviewScreen = ({ navigation }: Props) => {
  const UserStore = useUser()

  const { profile } = UserStore

  return (
    <View style={styles.container}>
      <Profile
        name={profile?.user}
        group={profile?.group}
        onPress={() => {}}
        style={styles.profile}
      />
      <Button
        // isDisabled={profile?.device != 'None'}
        textStyle={styles.buttonText}
        style={styles.button}
        onPress={() => navigation.navigate('DeviceScreen')}
        theme={'secondery'}
        iconRight={faAngleRight}
        iconColor={colors.black}
        iconSize={18}
      >
        Devices
      </Button>
      <Button
        textStyle={styles.buttonText}
        style={styles.button}
        onPress={() => {}}
        theme={'secondery'}
        iconRight={faAngleRight}
        iconColor={colors.black}
        iconSize={18}
      >
        Home assistent
      </Button>
      <Button
        textStyle={styles.buttonText}
        style={styles.button}
        onPress={() => navigation.navigate('Location')}
        theme={'secondery'}
        iconRight={faAngleRight}
        iconColor={colors.black}
        iconSize={18}
      >
        Permissions
      </Button>
    </View>
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
    marginBottom: margins.md,
  },
})

type Props = {
  navigation: ProfileStackNavigationProp<'ProfileOverview'>
}

export default observer(ProfileOverviewScreen)

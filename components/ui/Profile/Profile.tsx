import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { scale } from 'react-native-size-matters'

import { colors, margins, typings } from '../../../theme'

import ProfileProps from './Profile.props'

const Profile = (props: ProfileProps) => {
  return (
    <View style={[styles.container, !!props.style && props.style]}>
      <View>
        <FontAwesomeIcon
          icon={faUser}
          color={colors.pink}
          size={90}
          style={styles.icon}
        />
      </View>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.group}>{props.group}</Text>
        <Pressable onPress={props.onPress}>
          <Text style={styles.edit}>Edit personal info</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: margins.lg,
    borderBottomColor: colors.pink,
    borderBottomWidth: 4,
  },
  icon: {
    marginRight: scale(margins.xxl),
    marginLeft: scale(margins.lg),
  },
  name: {
    ...typings.h5,
    color: colors.pink,
    marginBottom: margins.sm,
  },
  group: {
    ...typings.reguler,
    marginBottom: margins.sm,
  },
  edit: {
    color: colors.pink,
    textDecorationLine: 'underline',
  },
})

export default Profile

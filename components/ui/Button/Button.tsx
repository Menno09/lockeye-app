import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import React from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Pressable,
  View,
} from 'react-native'

import { colors, margins, typings } from '../../../theme'
import Props from './Button.props'

const Button = ({
  children,
  onPress,
  theme = 'primary',
  textStyle,
  style,
  iconColor,
  iconSize,
  iconLeft,
  iconRight,
  isLoading = false,
  isDisabled = false,
}: Props) => {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={[
        !!style && style,
        styles.shadowsolid,
        isDisabled && styles.disabled,
        isLoading && styles.loading,
      ]}
    >
      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          color={colors.white}
          size="small"
        />
      )}
      <View style={[styles.container, styles[theme]]}>
        {!!iconLeft && (
          <FontAwesomeIcon
            icon={iconLeft}
            color={iconColor}
            size={iconSize}
            style={styles.iconLeft}
          />
        )}
        <Text
          style={[
            textStyle ? textStyle : styles.textStyle,
            ,
            isLoading && styles.hidden,
          ]}
        >
          {children}
        </Text>
        {!!iconRight && (
          <FontAwesomeIcon
            icon={iconRight}
            color={iconColor}
            size={iconSize}
            style={styles.iconRight}
          />
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: margins.xs,
    paddingHorizontal: margins.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },
  primary: {
    backgroundColor: colors.pink,
    borderColor: colors.pink,
    borderWidth: 3,
  },
  primaryOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.pink,
    borderWidth: 3,
  },
  secondery: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 3,
  },
  seconderyOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 3,
  },
  textStyle: {
    ...typings.bold,
    color: colors.white,
  },
  disabled: {
    opacity: 0.3,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    zIndex: 2,
  },
  hidden: {
    opacity: 0,
  },
  iconLeft: {
    marginRight: margins.xs,
  },
  iconRight: {
    marginLeft: margins.xs,
  },
  shadowsolid: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default Button

// import Dash from 'react-native-dash';

import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput as NativeTextInput,
  View,
} from 'react-native'

import { colors, margins, typings } from '../../../theme'
import Props from './TextInput.props.'

const TextInput = ({
  placeholder,
  onChange,
  value,
  hasDash,
  error,
  label,
  style,
  multiline,
  ...otherProps
}: Props) => {
  return (
    <View style={style}>
      <View style={[styles.inputContainer]}>
        {!!label && <Text style={styles.heading}>{label}</Text>}
        <NativeTextInput
          onChangeText={onChange}
          style={[
            styles.textStyle,
            styles.inputField,
            !!multiline && styles.multiline,
          ]}
          value={value}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          {...otherProps}
        />
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.white,
    padding: margins.md,
    borderRadius: 15,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    ...typings.regular,
  },
  inputField: {
    padding: 0,
  },
  error: {
    ...typings.error,
    marginTop: margins.xs,
  },
  heading: {
    ...typings.heading,
    marginBottom: margins.xs,
  },
  multiline: {
    height: 180,
  },
})
export default TextInput

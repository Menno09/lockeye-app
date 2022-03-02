import colors from './colors'

import fontFamilies from './fontFamilies'

import fontSizeStyles from './fontSizes'

const typings = {
  heading: {
    color: colors.text,
    fontFamily: fontFamilies.bold,
  },
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  regular: {
    color: colors.text,
    fontFamily: fontFamilies.regular,
  },
  bold: {},
  light: {},
}

typings.h1 = {
  ...typings.heading,
  ...fontSizeStyles.h1,
  color: colors.text,
}

typings.h2 = {
  ...typings.heading,
  ...fontSizeStyles.h2,
}

typings.h3 = {
  ...typings.heading,
  ...fontSizeStyles.h3,
}

typings.h4 = {
  ...typings.heading,
  ...fontSizeStyles.h4,
}

typings.h5 = {
  ...typings.heading,
  ...fontSizeStyles.h5,
}

typings.h6 = {
  ...typings.heading,
  ...fontSizeStyles.h6,
}

typings.light = {
  ...typings.regular,
  fontFamily: fontFamilies.regular,
}

typings.small = {
  ...typings.regular,
  ...fontSizeStyles.small,
}

typings.bold = {
  ...typings.regular,
  fontFamily: fontFamilies.bold,
}

typings.error = {
  ...typings.light,
  color: colors.error,
}

export default typings

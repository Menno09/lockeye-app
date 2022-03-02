import { scale } from 'react-native-size-matters'

export const fontSizes = {
  h1: scale(28),
  h2: scale(26),
  h3: scale(24),
  h4: scale(21),
  h5: scale(18),
  h6: scale(16),
  p: scale(13),
  sub: scale(14),
  light: scale(12),
  small: scale(11),
}

const sizeStyles = {
  h1: {
    fontSize: fontSizes.h1,
    lineHeight: fontSizes.h1 * 1.22,
  },
  h2: {
    fontSize: fontSizes.h2,
    lineHeight: fontSizes.h2 * 1.22,
  },
  h3: {
    fontSize: fontSizes.h3,
    lineHeight: fontSizes.h3 * 1.22,
  },
  h4: {
    fontSize: fontSizes.h4,
    lineHeight: fontSizes.h4 * 1.22,
  },
  h5: {
    fontSize: fontSizes.h5,
    lineHeight: fontSizes.h5 * 1.22,
  },
  h6: {
    fontSize: fontSizes.h6,
    lineHeight: fontSizes.h6 * 1.22,
  },
  p: {
    fontSize: fontSizes.p,
    lineHeight: fontSizes.p * 1.22,
  },
  sub: {
    fontSize: fontSizes.sub,
    lineHeight: fontSizes.sub * 1.22,
  },
  light: {
    fontSize: fontSizes.light,
    lineHeight: fontSizes.light * 1.22,
  },
  small: {
    fontSize: fontSizes.small,
    lineHeight: fontSizes.small * 1.22,
  },
}

export default sizeStyles

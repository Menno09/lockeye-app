const generalColors = {
  transparent: 'rgba(255,255,255,0)',
  white: '#FFFFFF',
  white20: 'rgba(255,255,255,.2)',
  white25: 'rgba(255,255,255,.25)',
  white50: 'rgba(255,255,255,.5)',
  white75: 'rgba(255,255,255,.75)',
  black50: 'rgba(0,0,0,.5)',
  black25: 'rgba(0,0,0,.25)',
  black10: 'rgba(0,0,0,.1)',
  black100: '#000',
  black: '#4a4a4a',
  brown: '#bea07b',
  pink: '#e5007d',
  darkpurple: '#A41E75',
  green: '#008137',
  darkGreen: '#037131',
  darkerGreen: '#035726',
  yellow: '#ffed00',
  blue: '#1dbadf',
  orange: '#f7a600',
  lime: '#c1d100',
  lightlime: '#d2db5d',
  grey: '#a1a1a1',
  lightgrey: '#d8d8d8',
  lightestgrey: '#fbfbfb',
  grapefruit: '#ff5353',
  appleRed: '#C5164C',
  facebook: '#3b5998',
}

const colors = {
  ...generalColors,
  primary: generalColors.appleRed,
  secondary: generalColors.darkpurple,
  error: generalColors.grapefruit,
  success: generalColors.lime,
  warning: generalColors.yellow,
  active: generalColors.blue,
  text: generalColors.black,
  disabled: generalColors.grey,
}

export default colors
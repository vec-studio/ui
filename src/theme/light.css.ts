import { createTheme } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from './contract.css'
import { tokens } from './tokens'

export const themeLightClassName = createTheme(themeVars, {
  ...tokens,
  color: {
    backgroundBase: openProps.gray2,
    backgroundLayer1: openProps.gray1,
    backgroundLayer2: openProps.gray0,
    borderColor: openProps.gray3,
    borderColorDisabled: openProps.gray1,
    borderColorHover: openProps.gray4,
    borderColorPressed: openProps.gray4,
    buttonBackground: openProps.gray0,
    buttonBackgroundPressed: openProps.gray1,
    fieldBackground: openProps.gray1,
    fieldTextColor: openProps.gray6,
    focusRingColor: openProps.purple4,
    highlightBackground: '#6f46ed',
    highlightBackgroundInvalid: '#cc2000',
    highlightBackgroundPressed: '#522acd',
    highlightForeground: 'white',
    highlightForegroundPressed: '#ddd',
    highlightOverlay: 'rgb(from #6f46ed r g b / 15%)',
    invalidColor: openProps.red4,
    invalidColorPressed: openProps.red5,
    linkColor: openProps.purple5,
    linkColorPressed: openProps.purple6,
    linkColorSecondary: openProps.gray5,
    overlayBackground: openProps.gray0,
    textColor: openProps.gray6,
    textColorBase: openProps.gray5,
    textColorDisabled: openProps.gray2,
    textColorHover: openProps.gray6,
    textColorPlaceholder: openProps.gray4
  }
})

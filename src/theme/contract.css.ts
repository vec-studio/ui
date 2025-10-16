import { createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: {
    backgroundBase: null,
    backgroundLayer1: null,
    backgroundLayer2: null,
    borderColor: null,
    borderColorDisabled: null,
    borderColorHover: null,
    borderColorPressed: null,
    buttonBackground: null,
    buttonBackgroundPressed: null,
    fieldBackground: null,
    fieldTextColor: null,
    focusRingColor: null,
    highlightBackground: null,
    highlightBackgroundInvalid: null,
    highlightBackgroundPressed: null,
    highlightForeground: null,
    highlightForegroundPressed: null,
    highlightOverlay: null,
    invalidColor: null,
    invalidColorPressed: null,
    linkColor: null,
    linkColorPressed: null,
    linkColorSecondary: null,
    overlayBackground: null,
    textColor: null,
    textColorBase: null,
    textColorDisabled: null,
    textColorHover: null,
    textColorPlaceholder: null
  },
  font: {
    body: null
  },
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null
  },
  fontWeight: {
    sm: null,
    md: null,
    lg: null
  }
})

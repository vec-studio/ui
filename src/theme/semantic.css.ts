import { createTheme } from '@vanilla-extract/css'
import { themeVars } from './vars.css'

export const [semanticClassName, semanticVars] = createTheme({
  color: {
    borderColor: themeVars.color.gray30,
    borderColorDisabled: themeVars.color.gray10,
    borderColorHover: themeVars.color.gray40,
    borderColorPressed: themeVars.color.gray40,
    buttonBackground: themeVars.color.gray10,
    buttonBackgroundPressed: themeVars.color.backgroundColor,
    fieldBackground: themeVars.color.gray10,
    fieldTextColor: themeVars.color.gray60,
    focusRingColor: themeVars.color.purple40,
    highlightBackground: '#6f46ed',
    highlightBackgroundInvalid: '#cc2000',
    highlightBackgroundPressed: '#522acd',
    highlightForeground: 'white',
    highlightForegroundPressed: '#ddd',
    highlightOverlay: 'rgb(from #6f46ed r g b / 15%)',
    invalidColor: themeVars.color.red40,
    invalidColorPressed: themeVars.color.red50,
    linkColor: themeVars.color.purple50,
    linkColorPressed: themeVars.color.purple60,
    linkColorSecondary: themeVars.color.gray50,
    overlayBackground: themeVars.color.gray10,
    textColor: themeVars.color.gray60,
    textColorBase: themeVars.color.gray50,
    textColorDisabled: themeVars.color.gray20,
    textColorHover: themeVars.color.gray60,
    textColorPlaceholder: themeVars.color.gray40
  }
})

import { createTheme } from '@vanilla-extract/css'
import { themeContract } from './contract.css'

export const [semanticClassName, semanticVars] = createTheme({
  color: {
    borderColor: themeContract.gray3,
    borderColorDisabled: themeContract.gray1,
    borderColorHover: themeContract.gray4,
    borderColorPressed: themeContract.gray4,
    buttonBackground: themeContract.gray1,
    buttonBackgroundPressed: themeContract.gray0,
    fieldBackground: themeContract.gray1,
    fieldTextColor: themeContract.gray6,
    focusRingColor: themeContract.purple4,
    highlightBackground: '#6f46ed',
    highlightBackgroundInvalid: '#cc2000',
    highlightBackgroundPressed: '#522acd',
    highlightForeground: 'white',
    highlightForegroundPressed: '#ddd',
    highlightOverlay: 'rgb(from #6f46ed r g b / 15%)',
    invalidColor: themeContract.red4,
    invalidColorPressed: themeContract.red5,
    linkColor: themeContract.purple5,
    linkColorPressed: themeContract.purple6,
    linkColorSecondary: themeContract.gray5,
    overlayBackground: themeContract.gray1,
    textColor: themeContract.gray6,
    textColorBase: themeContract.gray5,
    textColorDisabled: themeContract.gray2,
    textColorHover: themeContract.gray6,
    textColorPlaceholder: themeContract.gray4
  }
})

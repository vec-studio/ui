import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: {
    backgroundColor: null,
    gray100: null,
    gray200: null,
    gray300: null,
    gray400: null,
    gray50: null,
    gray500: null,
    gray600: null,
    highlightHover: null,
    highlightPressed: null,
    purple100: null,
    purple200: null,
    purple300: null,
    purple400: null,
    purple500: null,
    purple600: null,
    red100: null,
    red200: null,
    red300: null,
    red400: null,
    red500: null,
    red600: null
  }
})

export const themeLightClassName = createTheme(themeVars, {
  color: {
    backgroundColor: '#f8f8f8',
    gray100: '#d0d0d0',
    gray200: '#afafaf',
    gray300: '#8f8f8f',
    gray400: '#717171',
    gray50: '#ffffff',
    gray500: '#555555',
    gray600: '#393939',
    highlightHover: 'rgb(0 0 0 / 0.07)',
    highlightPressed: 'rgb(0 0 0 / 0.15)',
    purple100: '#d5c9fa',
    purple200: '#b8a3f6',
    purple300: '#997cf2',
    purple400: '#7a54ef',
    purple500: '#582ddc',
    purple600: '#3c1e95',
    red100: '#f7c4ba',
    red200: '#f29887',
    red300: '#eb664d',
    red400: '#de2300',
    red500: '#a81b00',
    red600: '#731200'
  }
})

export const themeDarkClassName = createTheme(themeVars, {
  color: {
    backgroundColor: '#1d1d1d',
    gray100: '#393939',
    gray200: '#4f4f4f',
    gray300: '#686868',
    gray400: '#848484',
    gray50: '#101010',
    gray500: '#a7a7a7',
    gray600: '#cfcfcf',
    highlightHover: 'rgb(255 255 255 / 0.1)',
    highlightPressed: 'rgb(255 255 255 / 0.2)',
    purple100: '#3c1e95',
    purple200: '#522acd',
    purple300: '#6f46ed',
    purple400: '#8e6ef1',
    purple500: '#b099f5',
    purple600: '#d5c8fa',
    red100: '#721200',
    red200: '#9c1900',
    red300: '#cc2000',
    red400: '#e95034',
    red500: '#f08c79',
    red600: '#f7c3ba'
  }
})

export const [semanticClassName, semanticVars] = createTheme({
  color: {
    borderColor: themeVars.color.gray300,
    borderColorDisabled: themeVars.color.gray100,
    borderColorHover: themeVars.color.gray400,
    borderColorPressed: themeVars.color.gray400,
    buttonBackground: themeVars.color.gray50,
    buttonBackgroundPressed: themeVars.color.backgroundColor,
    fieldBackground: themeVars.color.gray50,
    fieldTextColor: themeVars.color.gray600,
    focusRingColor: themeVars.color.purple400,
    highlightBackground: '#6f46ed',
    highlightBackgroundInvalid: '#cc2000',
    highlightBackgroundPressed: '#522acd',
    highlightForeground: 'white',
    highlightForegroundPressed: '#ddd',
    highlightOverlay: 'rgb(from #6f46ed r g b / 15%)',
    invalidColor: themeVars.color.red400,
    invalidColorPressed: themeVars.color.red500,
    linkColor: themeVars.color.purple500,
    linkColorPressed: themeVars.color.purple600,
    linkColorSecondary: themeVars.color.gray500,
    overlayBackground: themeVars.color.gray50,
    textColor: themeVars.color.gray600,
    textColorBase: themeVars.color.gray500,
    textColorDisabled: themeVars.color.gray200,
    textColorHover: themeVars.color.gray600,
    textColorPlaceholder: themeVars.color.gray400
  }
})

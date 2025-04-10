import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: {
    backgroundColor: null,
    blue100: null,
    blue200: null,
    blue300: null,
    blue400: null,
    blue500: null,
    blue600: null,
    gray100: null,
    gray200: null,
    gray300: null,
    gray400: null,
    gray500: null,
    gray600: null,
    green100: null,
    green200: null,
    green300: null,
    green400: null,
    green500: null,
    green600: null,
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

const themeLightTokens = {
  color: {
    backgroundColor: '#f8f8f8',
    blue100: '#edf7ff',
    blue200: '#ddecf8',
    blue300: '#cce0f1',
    blue400: '#93bcdc',
    blue500: '#66a0cd',
    blue600: '#2694d6',
    gray100: '#f8f9f9',
    gray200: '#e8eaec',
    gray300: '#d8dcde',
    gray400: '#b0b8be',
    gray500: '#919ca5',
    gray600: '#848f99',
    green100: '#eef8f4',
    green200: '#daeee6',
    green300: '#cae3d9',
    green400: '#94c1b0',
    green500: '#4eab89',
    green600: '#26a178',
    highlightHover: 'rgb(0 0 0 / 0.07)',
    highlightPressed: 'rgb(0 0 0 / 0.15)',
    purple100: '#d5c9fa',
    purple200: '#b8a3f6',
    purple300: '#997cf2',
    purple400: '#7a54ef',
    purple500: '#582ddc',
    purple600: '#3c1e95',
    red100: '#fff1f1',
    red200: '#ffd7d9',
    red300: '#ffb3b8',
    red400: '#ff8389',
    red500: '#fa4d56',
    red600: '#da1e28'
  }
}

export const themeLightClassName = createTheme(themeVars, themeLightTokens)

export const themeDarkClassName = createTheme(themeVars, themeLightTokens)

export const [semanticClassName, semanticVars] = createTheme({
  color: {
    borderColor: themeVars.color.gray300,
    borderColorDisabled: themeVars.color.gray100,
    borderColorHover: themeVars.color.gray400,
    borderColorPressed: themeVars.color.gray400,
    buttonBackground: themeVars.color.gray100,
    buttonBackgroundPressed: themeVars.color.backgroundColor,
    fieldBackground: themeVars.color.gray100,
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
    overlayBackground: themeVars.color.gray100,
    textColor: themeVars.color.gray600,
    textColorBase: themeVars.color.gray500,
    textColorDisabled: themeVars.color.gray200,
    textColorHover: themeVars.color.gray600,
    textColorPlaceholder: themeVars.color.gray400
  }
})

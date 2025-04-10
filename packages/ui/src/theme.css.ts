import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const themeVars = createThemeContract({
  color: {
    backgroundColor: null,
    blue10: null,
    blue20: null,
    blue30: null,
    blue40: null,
    blue50: null,
    blue60: null,
    gray10: null,
    gray20: null,
    gray30: null,
    gray40: null,
    gray50: null,
    gray60: null,
    green10: null,
    green20: null,
    green30: null,
    green40: null,
    green50: null,
    green60: null,
    highlightHover: null,
    highlightPressed: null,
    purple10: null,
    purple20: null,
    purple30: null,
    purple40: null,
    purple50: null,
    purple60: null,
    red10: null,
    red20: null,
    red30: null,
    red40: null,
    red50: null,
    red60: null
  }
})

const themeLightTokens = {
  color: {
    backgroundColor: '#f8f8f8',
    blue10: '#edf7ff',
    blue20: '#ddecf8',
    blue30: '#cce0f1',
    blue40: '#93bcdc',
    blue50: '#66a0cd',
    blue60: '#2694d6',
    gray10: '#f8f9f9',
    gray20: '#e8eaec',
    gray30: '#d8dcde',
    gray40: '#b0b8be',
    gray50: '#919ca5',
    gray60: '#848f99',
    green10: '#eef8f4',
    green20: '#daeee6',
    green30: '#cae3d9',
    green40: '#94c1b0',
    green50: '#4eab89',
    green60: '#26a178',
    highlightHover: 'rgb(0 0 0 / 0.07)',
    highlightPressed: 'rgb(0 0 0 / 0.15)',
    purple10: '#d5c9fa',
    purple20: '#b8a3f6',
    purple30: '#997cf2',
    purple40: '#7a54ef',
    purple50: '#582ddc',
    purple60: '#3c1e95',
    red10: '#fff1f1',
    red20: '#ffd7d9',
    red30: '#ffb3b8',
    red40: '#ff8389',
    red50: '#fa4d56',
    red60: '#da1e28'
  }
}

export const themeLightClassName = createTheme(themeVars, themeLightTokens)

export const themeDarkClassName = createTheme(themeVars, themeLightTokens)

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

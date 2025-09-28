import { style } from '@vanilla-extract/css'
import { toolbarClassName } from './toolbar.css'
import { themeVars } from '../theme'

export const toggleButtonClassName = style({
  appearance: 'none',
  background: themeVars.color.buttonBackground,
  border: `1px solid ${themeVars.color.borderColor}`,
  borderRadius: '4px',
  color: themeVars.color.textColor,
  fontSize: '1rem',
  forcedColorAdjust: 'none',
  margin: '0',
  outline: 'none',
  padding: '6px 10px',
  textAlign: 'center',
  verticalAlign: 'middle',

  selectors: {
    '&[data-pressed]': {
      boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 0.1)',
      background: themeVars.color.buttonBackgroundPressed,
      borderColor: themeVars.color.borderColorPressed
    },
    '&[data-selected]': {
      background: themeVars.color.highlightBackground,
      borderColor: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground
    },
    '&[data-selected][data-pressed]': {
      background: themeVars.color.highlightBackground,
      borderColor: themeVars.color.highlightBackground
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-disabled]': {
      borderColor: themeVars.color.borderColorDisabled,
      background: themeVars.color.buttonBackground,
      color: themeVars.color.textColorDisabled
    },
    // toolbar
    [`${toolbarClassName} &`]: {
      width: '32px'
    }
  }
})

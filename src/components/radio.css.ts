import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const radioClassName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.571rem',
  fontSize: '1.143rem',
  color: themeVars.color.textColor,
  forcedColorAdjust: 'none',

  selectors: {
    '&:before': {
      content: '""',
      display: 'block',
      width: '1.286rem',
      height: '1.286rem',
      boxSizing: 'border-box',
      border: `0.143rem solid ${themeVars.color.borderColor}`,
      background: themeVars.color.fieldBackground,
      borderRadius: '1.286rem',
      transition: 'all 200ms'
    },
    '&[data-pressed]:before': {
      borderColor: themeVars.color.borderColorPressed
    },
    '&[data-selected]:before': {
      borderColor: themeVars.color.highlightBackground,
      borderWidth: '0.429rem'
    },
    '&[data-selected][data-pressed]:before': {
      borderColor: themeVars.color.highlightBackgroundPressed
    },
    '&[data-focus-visible]:before': {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-invalid]:before': {
      borderColor: themeVars.color.invalidColor
    },
    '&[data-invalid][data-pressed]:before': {
      borderColor: themeVars.color.invalidColorPressed
    },
    '&[data-disabled]': {
      color: themeVars.color.textColorDisabled
    },
    '&[data-disabled]:before': {
      borderColor: themeVars.color.borderColorDisabled
    }
  }
})

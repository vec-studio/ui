import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const radioClassName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.571rem',
  fontSize: '1.143rem',
  color: semanticVars.color.textColor,
  forcedColorAdjust: 'none',

  selectors: {
    '&:before': {
      content: '""',
      display: 'block',
      width: '1.286rem',
      height: '1.286rem',
      boxSizing: 'border-box',
      border: `0.143rem solid ${semanticVars.color.borderColor}`,
      background: semanticVars.color.fieldBackground,
      borderRadius: '1.286rem',
      transition: 'all 200ms'
    },
    '&[data-pressed]:before': {
      borderColor: semanticVars.color.borderColorPressed
    },
    '&[data-selected]:before': {
      borderColor: semanticVars.color.highlightBackground,
      borderWidth: '0.429rem'
    },
    '&[data-selected][data-pressed]:before': {
      borderColor: semanticVars.color.highlightBackgroundPressed
    },
    '&[data-focus-visible]:before': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-invalid]:before': {
      borderColor: semanticVars.color.invalidColor
    },
    '&[data-invalid][data-pressed]:before': {
      borderColor: semanticVars.color.invalidColorPressed
    },
    '&[data-disabled]': {
      color: semanticVars.color.textColorDisabled
    },
    '&[data-disabled]:before': {
      borderColor: semanticVars.color.borderColorDisabled
    }
  }
})

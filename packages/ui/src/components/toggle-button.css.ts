import { style } from '@vanilla-extract/css'
import { toolbarClassName } from './toolbar.css'
import { semanticVars } from '../theme.css'

export const toggleButtonClassName = style({
  appearance: 'none',
  background: semanticVars.color.buttonBackground,
  border: `1px solid ${semanticVars.color.borderColor}`,
  borderRadius: '4px',
  color: semanticVars.color.textColor,
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
      background: semanticVars.color.buttonBackgroundPressed,
      borderColor: semanticVars.color.borderColorPressed
    },
    '&[data-selected]': {
      background: semanticVars.color.highlightBackground,
      borderColor: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    '&[data-selected][data-pressed]': {
      background: semanticVars.color.highlightBackground,
      borderColor: semanticVars.color.highlightBackground
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-disabled]': {
      borderColor: semanticVars.color.borderColorDisabled,
      background: semanticVars.color.buttonBackground,
      color: semanticVars.color.textColorDisabled
    },
    // toolbar
    [`${toolbarClassName} &`]: {
      width: '32px'
    }
  }
})

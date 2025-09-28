import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { dateInputClassName } from './date-input.css'
import { timeFieldClassName } from './time-filed.css'

export const dateSegmentClassName = style({
  padding: '0 2px',
  fontVariantNumeric: 'tabular-nums',
  textAlign: 'end',
  color: themeVars.color.textColor,

  selectors: {
    '&[data-type=literal]': {},

    '&[data-placeholder]': {
      color: themeVars.color.textColorPlaceholder,
      fontStyle: 'italic'
    },
    '&:focus': {
      color: themeVars.color.highlightForeground,
      background: themeVars.color.highlightBackground,
      outline: 'none',
      borderRadius: '4px',
      caretColor: 'transparent'
    },
    '&[data-invalid]': {
      color: themeVars.color.invalidColor
    },
    '&[data-invalid]:focus': {
      background: themeVars.color.highlightBackgroundInvalid,
      color: themeVars.color.highlightForeground
    },
    // time field
    [`${timeFieldClassName} ${dateInputClassName} &`]: {
      padding: '0 2px',
      fontVariantNumeric: 'tabular-nums',
      textAlign: 'end',
      color: themeVars.color.textColor
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-type=literal]`]: {
      padding: '0'
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-placeholder]`]: {
      color: themeVars.color.textColorPlaceholder,
      fontStyle: 'italic'
    },
    [`${timeFieldClassName} ${dateInputClassName} &:focus`]: {
      color: themeVars.color.highlightForeground,
      background: themeVars.color.highlightBackground,
      outline: 'none',
      borderRadius: '4px',
      caretColor: 'transparent'
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-invalid]`]: {
      color: themeVars.color.invalidColor
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-invalid]:focus`]: {
      background: themeVars.color.highlightBackgroundInvalid,
      color: themeVars.color.highlightForeground
    }
  }
})

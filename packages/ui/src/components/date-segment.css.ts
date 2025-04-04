import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { dateInputClassName } from './date-input.css'
import { timeFieldClassName } from './time-filed.css'

export const dateSegmentClassName = style({
  padding: '0 2px',
  fontVariantNumeric: 'tabular-nums',
  textAlign: 'end',
  color: semanticVars.color.textColor,

  selectors: {
    '&[data-type=literal]': {},

    '&[data-placeholder]': {
      color: semanticVars.color.textColorPlaceholder,
      fontStyle: 'italic'
    },
    '&:focus': {
      color: semanticVars.color.highlightForeground,
      background: semanticVars.color.highlightBackground,
      outline: 'none',
      borderRadius: '4px',
      caretColor: 'transparent'
    },
    '&[data-invalid]': {
      color: semanticVars.color.invalidColor
    },
    '&[data-invalid]:focus': {
      background: semanticVars.color.highlightBackgroundInvalid,
      color: semanticVars.color.highlightForeground
    },
    // time field
    [`${timeFieldClassName} ${dateInputClassName} &`]: {
      padding: '0 2px',
      fontVariantNumeric: 'tabular-nums',
      textAlign: 'end',
      color: semanticVars.color.textColor
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-type=literal]`]: {
      padding: '0'
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-placeholder]`]: {
      color: semanticVars.color.textColorPlaceholder,
      fontStyle: 'italic'
    },
    [`${timeFieldClassName} ${dateInputClassName} &:focus`]: {
      color: semanticVars.color.highlightForeground,
      background: semanticVars.color.highlightBackground,
      outline: 'none',
      borderRadius: '4px',
      caretColor: 'transparent'
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-invalid]`]: {
      color: semanticVars.color.invalidColor
    },
    [`${timeFieldClassName} ${dateInputClassName} &[data-invalid]:focus`]: {
      background: semanticVars.color.highlightBackgroundInvalid,
      color: semanticVars.color.highlightForeground
    }
  }
})

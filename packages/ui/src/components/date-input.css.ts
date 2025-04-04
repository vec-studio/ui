import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { dateFieldClassName } from './date-field.css'
import { datePickerClassName } from './date-picker.css'
import { dateRangePickerClassName } from './date-range-picker.css'
import { timeFieldClassName } from './time-filed.css'

export const dateInputClassName = style({
  display: 'inline',
  padding: '4px',
  border: `1px solid ${semanticVars.color.borderColor}`,
  borderRadius: '6px',
  background: semanticVars.color.fieldBackground,
  width: 'fit-content',
  minWidth: '150px',
  whiteSpace: 'nowrap',
  forcedColorAdjust: 'none',

  selectors: {
    // date picker
    [`${datePickerClassName} &`]: {
      padding: '4px 2.5rem 4px 8px'
    },
    [`${datePickerClassName}[data-invalid] &`]: {
      content: '🚫',
      flex: 1,
      textAlign: 'end'
    },
    // date range picker
    [`${dateRangePickerClassName} &`]: {
      width: 'unset',
      minWidth: 'unset',
      padding: 'unset',
      border: 'unset',
      outline: 'unset'
    },
    // date field
    [`${dateFieldClassName} &`]: {},
    [`${dateFieldClassName} &[data-focus-within]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    // time input
    [`${timeFieldClassName} &`]: {
      display: 'inline',
      padding: '4px',
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '6px',
      background: semanticVars.color.fieldBackground,
      width: 'fit-content',
      minWidth: '150px',
      whiteSpace: 'nowrap',
      forcedColorAdjust: 'none'
    },
    [`${timeFieldClassName} &[data-focus-within]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    }
  }
})

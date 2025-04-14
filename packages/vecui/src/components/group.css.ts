import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { datePickerClassName } from './date-picker.css'
import { dateRangePickerClassName } from './date-range-picker.css'
import { numberFieldClassName } from './number-field.css'
import { toolbarClassName } from './toolbar.css'

export const groupClassName = style({
  border: `1px solid ${semanticVars.color.borderColor}`,
  background: semanticVars.color.fieldBackground,
  borderRadius: '6px',
  alignItems: 'center',
  width: 'fit-content',
  transition: 'all .2s',
  display: 'flex',
  overflow: 'hidden',

  selectors: {
    // date picker
    [`${datePickerClassName} &`]: {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center'
    },
    // date range picker
    [`${dateRangePickerClassName} &`]: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      minWidth: '220px',
      maxWidth: '100%',
      boxSizing: 'border-box',
      overflow: 'auto',
      position: 'relative',
      padding: '4px 4px 4px 8px',
      border: `1px solid ${semanticVars.color.borderColor}`,
      borderRadius: '6px',
      background: semanticVars.color.fieldBackground,
      whiteSpace: 'nowrap'
    },
    [`${dateRangePickerClassName} &[data-pressed]`]: {
      boxShadow: 'none',
      background: semanticVars.color.highlightBackground
    },
    [`${dateRangePickerClassName} &[data-focus-within]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    // number field
    [`${numberFieldClassName} &`]: {
      display: 'flex',
      width: 'fit-content',
      borderRadius: '4px'
    },
    [`${numberFieldClassName} &[data-focus-within]`]: {
      outline: `1px solid ${semanticVars.color.focusRingColor}`
    },
    // toolbar
    [`${toolbarClassName} &`]: {
      display: 'contents'
    }
  }
})

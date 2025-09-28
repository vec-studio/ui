import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { datePickerClassName } from './date-picker.css'
import { dateRangePickerClassName } from './date-range-picker.css'
import { numberFieldClassName } from './number-field.css'
import { toolbarClassName } from './toolbar.css'
import { textFieldClassName } from './text-field.css'

export const groupClassName = style({
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
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '6px',
      background: themeVars.color.fieldBackground,
      whiteSpace: 'nowrap'
    },
    [`${dateRangePickerClassName} &[data-pressed]`]: {
      boxShadow: 'none',
      background: themeVars.color.highlightBackground
    },
    [`${dateRangePickerClassName} &[data-focus-within]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    // number field
    [`${numberFieldClassName} &`]: {
      borderRadius: '4px',
      display: 'flex',
      width: 'fit-content'
    },
    [`${numberFieldClassName} &[data-focus-within]`]: {
      outline: `1px solid ${themeVars.color.focusRingColor}`
    },
    // text field
    [`${textFieldClassName} &`]: {
      alignItems: 'center',
      background: themeVars.color.fieldBackground,
      border: `1px solid ${themeVars.color.borderColor}`,
      borderRadius: '6px',
      display: 'flex',
      overflow: 'hidden',
      transition: 'all .2s',
      width: 'fit-content'
    },
    // toolbar
    [`${toolbarClassName} &`]: {
      display: 'contents'
    }
  }
})

import { style } from '@vanilla-extract/css'
import { autocompleteClassName } from './autocomplete.css'

export const menuClassName = style({
  maxHeight: 'inherit',
  boxSizing: 'border-box',
  overflow: 'auto',
  padding: '2px',
  minWidth: '150px',
  outline: 'none',

  selectors: {
    // autocomplete
    [`${autocompleteClassName} &[data-empty]`]: {
      alignItems: 'center',
      justifyContent: 'center',
      fontStyle: 'italic'
    }
  }
})

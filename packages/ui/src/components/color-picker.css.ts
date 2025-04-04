import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const colorPickerClassName = style({
  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: 'none',
  borderRadius: '4px',
  color: semanticVars.color.textColor,
  display: 'flex',
  fontSize: '1rem',
  gap: '8px',
  outline: 'none',
  padding: 0,
  verticalAlign: 'middle',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    }
  }
})

export const colorPickerDialogClassName = style({
  outline: 'none',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: '192px',
  maxHeight: 'inherit',
  boxSizing: 'border-box',
  overflow: 'auto'
})

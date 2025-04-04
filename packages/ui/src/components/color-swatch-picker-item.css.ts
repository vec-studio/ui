import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const colorSwatchPickerItemClassName = style({
  position: 'relative',
  outline: 'none',
  borderRadius: '4px',
  width: 'fit-content',
  forcedColorAdjust: 'none',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-selected]::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      border: '2px solid black',
      outline: '2px solid white',
      outlineOffset: '-4px',
      borderRadius: 'inherit'
    },
    '&[data-disabled]': {
      opacity: 0.2
    }
  }
})

import { style } from '@vanilla-extract/css'

export const colorAreaClassName = style({
  width: '192px',
  height: '192px',
  borderRadius: '4px',
  flexShrink: 0,
  selectors: {
    '&[data-disabled]': {
      background: 'gray !important'
    }
  }
})

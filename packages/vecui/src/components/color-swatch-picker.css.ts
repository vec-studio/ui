import { style } from '@vanilla-extract/css'

export const colorSwatchPickerClassName = style({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',

  selectors: {
    '&[data-layout=stack]': {
      flexDirection: 'column'
    }
  }
})

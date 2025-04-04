import { style } from '@vanilla-extract/css'

export const toolbarClassName = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
  width: 'fit-content',

  selectors: {
    '&[data-orientation=horizontal]': {
      flexDirection: 'row'
    },
    '&[data-orientation=vertical]': {
      alignItems: 'start',
      flexDirection: 'column'
    }
  }
})

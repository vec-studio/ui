import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const tabListClassName = style({
  display: 'flex',

  selectors: {
    '&[data-orientation=horizontal]': {
      borderBottom: `1px solid ${semanticVars.color.borderColor}`
    },
    '&[data-orientation=vertical]': {
      flexDirection: 'column',
      borderInlineEnd: '1px solid gray'
    }
  }
})

import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme'

export const tabsClassName = style({
  display: 'flex',
  color: semanticVars.color.textColor,

  selectors: {
    '&[data-orientation=horizontal]': {
      flexDirection: 'column'
    },
    '&[data-orientation=vertical]': {
      flexDirection: 'row'
    }
  }
})

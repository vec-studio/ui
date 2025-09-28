import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const tabListClassName = style({
  display: 'flex',

  selectors: {
    '&[data-orientation=horizontal]': {
      borderBottom: `1px solid ${themeVars.color.borderColor}`
    },
    '&[data-orientation=vertical]': {
      flexDirection: 'column',
      borderInlineEnd: '1px solid gray'
    }
  }
})

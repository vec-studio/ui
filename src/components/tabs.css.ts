import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const tabsClassName = style({
  display: 'flex',
  color: themeVars.color.textColor,

  selectors: {
    '&[data-orientation=horizontal]': {
      flexDirection: 'column'
    },
    '&[data-orientation=vertical]': {
      flexDirection: 'row'
    }
  }
})

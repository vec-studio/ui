import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const dropIndicatorClassName = style({
  selectors: {
    '&[data-drop-target]': {
      outline: `1px solid ${themeVars.color.highlightBackground}`
    }
  }
})

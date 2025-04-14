import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const dropIndicatorClassName = style({
  selectors: {
    '&[data-drop-target]': {
      outline: `1px solid ${semanticVars.color.highlightBackground}`
    }
  }
})

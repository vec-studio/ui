import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { buttonClassName } from './button.css'
import { selectClassName } from './select.css'

export const selectValueClassName = style({
  selectors: {
    [`${selectClassName} &[data-placeholder]`]: {
      fontStyle: 'italic',
      color: semanticVars.color.textColorPlaceholder
    },
    // select
    [`${selectClassName} &[slot=description]`]: {
      display: 'none'
    },
    [`${selectClassName} ${buttonClassName}[data-disabled] &[data-placeholder]`]: {
      color: semanticVars.color.textColorDisabled
    }
  }
})

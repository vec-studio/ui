import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { buttonClassName } from './button.css'
import { selectClassName } from './select.css'

export const selectValueClassName = style({
  selectors: {
    [`${selectClassName} &[data-placeholder]`]: {
      fontStyle: 'italic',
      color: themeVars.color.textColorPlaceholder
    },
    // select
    [`${selectClassName} &[slot=description]`]: {
      display: 'none'
    },
    [`${selectClassName} ${buttonClassName}[data-disabled] &[data-placeholder]`]: {
      color: themeVars.color.textColorDisabled
    }
  }
})

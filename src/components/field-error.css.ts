import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { searchFieldClassName } from './search-field.css'

export const fieldErrorClassName = style({
  fontSize: '0.857rem',
  color: themeVars.color.invalidColor,

  selectors: {
    // search-field
    [`${searchFieldClassName} &`]: {
      gridArea: 'help'
    }
  }
})

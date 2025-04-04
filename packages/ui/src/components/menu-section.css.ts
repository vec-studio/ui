import { style } from '@vanilla-extract/css'
import { menuClassName } from './menu.css'

export const menuSectionClassName = style({
  selectors: {
    [`${menuClassName} &:not(:first-child)`]: {
      marginTop: '12px'
    }
  }
})

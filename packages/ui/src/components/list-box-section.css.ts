import { style } from '@vanilla-extract/css'
import { listBoxClassName } from './list-box.css'

export const listBoxSectionClassName = style({
  selectors: {
    [`${listBoxClassName} &:not(:first-child)`]: {
      marginTop: '12px'
    }
  }
})

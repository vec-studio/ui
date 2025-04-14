import { style } from '@vanilla-extract/css'
import { breadcrumbsClassName } from './breadcrumbs.css'

export const breadcrumbClassName = style({
  selectors: {
    [`${breadcrumbsClassName} &:not(:last-child)::after`]: {
      content: '›',
      padding: '0 5px'
    }
  }
})

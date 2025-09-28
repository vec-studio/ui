import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const breadcrumbsClassName = style({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '1.285rem',
  color: themeVars.color.textColor
})

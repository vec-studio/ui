import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const checkboxGroupClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.571rem',
  color: themeVars.color.textColor
})

export const description = globalStyle(`${checkboxGroupClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

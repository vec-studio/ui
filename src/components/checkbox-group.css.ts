import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const checkboxGroupClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.571rem',
  color: semanticVars.color.textColor
})

export const description = globalStyle(`${checkboxGroupClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

import { style, globalStyle } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const colorFieldClassName = style({
  display: 'flex',
  flexDirection: 'column',
  color: semanticVars.color.textColor
})

globalStyle(`${colorFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

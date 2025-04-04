import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const timeFieldClassName = style({
  color: semanticVars.color.textColor,
  display: 'flex',
  flexDirection: 'column'
})

globalStyle(`${timeFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

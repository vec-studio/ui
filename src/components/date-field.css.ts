import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme'

export const dateFieldClassName = style({
  color: semanticVars.color.textColor,
  display: 'flex',
  flexDirection: 'column'
})

globalStyle(`${dateFieldClassName}[slot=description]`, {
  fontSize: '0.857rem'
})

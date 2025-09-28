import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const dateFieldClassName = style({
  color: themeVars.color.textColor,
  display: 'flex',
  flexDirection: 'column'
})

globalStyle(`${dateFieldClassName}[slot=description]`, {
  fontSize: '0.857rem'
})

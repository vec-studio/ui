import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const timeFieldClassName = style({
  color: themeVars.color.textColor,
  display: 'flex',
  flexDirection: 'column'
})

globalStyle(`${timeFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

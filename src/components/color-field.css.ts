import { style, globalStyle } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const colorFieldClassName = style({
  display: 'flex',
  flexDirection: 'column',
  color: themeVars.color.textColor
})

globalStyle(`${colorFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const numberFieldClassName = style({
  marginBottom: '8px',
  color: themeVars.color.textColor
})

globalStyle(`${numberFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

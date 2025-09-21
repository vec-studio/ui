import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'

export const numberFieldClassName = style({
  marginBottom: '8px',
  color: semanticVars.color.textColor
})

globalStyle(`${numberFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

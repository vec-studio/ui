import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const comboBoxClassName = style({
  color: semanticVars.color.textColor
})

globalStyle(`${comboBoxClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const comboBoxClassName = style({
  color: themeVars.color.textColor
})

globalStyle(`${comboBoxClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

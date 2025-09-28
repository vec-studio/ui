import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const datePickerClassName = style({
  color: themeVars.color.textColor
})

globalStyle(`${datePickerClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

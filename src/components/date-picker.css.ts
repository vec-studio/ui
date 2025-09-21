import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const datePickerClassName = style({
  color: semanticVars.color.textColor
})

globalStyle(`${datePickerClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

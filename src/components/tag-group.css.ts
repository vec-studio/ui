import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const tagGroupClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  fontSize: 'small',
  color: themeVars.color.textColor
})

globalStyle(`${tagGroupClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

globalStyle(`${tagGroupClassName} [slot=errorMessage]`, {
  fontSize: '0.857rem',
  color: themeVars.color.invalidColor
})

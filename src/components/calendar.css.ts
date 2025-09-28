import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const calendarClassName = style({
  width: 'fit-content',
  maxWidth: '100%',
  color: themeVars.color.textColor
})

globalStyle(`${calendarClassName} header`, {
  display: 'flex',
  alignItems: 'center',
  margin: '0 4px .5rem 4px'
})

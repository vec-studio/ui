import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const calendarClassName = style({
  width: 'fit-content',
  maxWidth: '100%',
  color: semanticVars.color.textColor
})

globalStyle(`${calendarClassName} header`, {
  display: 'flex',
  alignItems: 'center',
  margin: '0 4px .5rem 4px'
})

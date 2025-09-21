import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const rangeCalendarClassName = style({
  width: 'fit-content',
  maxWidth: '100%',
  color: semanticVars.color.textColor
})

globalStyle(`${rangeCalendarClassName} header`, {
  display: 'flex',
  alignItems: 'center',
  margin: '0 4px .5rem 4px'
})

globalStyle(`${rangeCalendarClassName} table`, {
  borderCollapse: 'collapse'
})

globalStyle(`${rangeCalendarClassName} table td`, {
  padding: '2px 0'
})

globalStyle(`${rangeCalendarClassName} [slot=errorMessage]`, {
  fontSize: '0.857rem',
  color: semanticVars.color.invalidColor
})

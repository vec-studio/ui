import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const dateRangePickerClassName = style({
  color: semanticVars.color.textColor
})

globalStyle(`${dateRangePickerClassName} [slot=start] + span`, {
  padding: '0 4px'
})

globalStyle(`${dateRangePickerClassName} [slot=end]`, {
  marginRight: '2rem',
  flex: 1
})

globalStyle(`${dateRangePickerClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

globalStyle(`${dateRangePickerClassName}[data-invalid] [slot=end]:after`, {
  content: '🚫',
  flex: 1,
  textAlign: 'end',
  marginLeft: '1.5rem',
  marginRight: '-1.5rem'
})

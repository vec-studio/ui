import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { buttonClassName } from './button.css'

export const selectClassName = style({
  color: semanticVars.color.textColor
})

globalStyle(`${selectClassName} span[aria-hidden]`, {
  width: '1.5rem',
  lineHeight: '1.375rem',
  marginLeft: '1rem',
  padding: '1px',
  background: semanticVars.color.highlightBackground,
  color: semanticVars.color.highlightForeground,
  forcedColorAdjust: 'none',
  borderRadius: '4px',
  fontSize: '0.857rem'
})

globalStyle(`${selectClassName} ${buttonClassName}[data-disabled] span[aria-hidden]`, {
  '@media': {
    '(forced-colors: active)': {
      background: '0 0'
    }
  }
})

globalStyle(`${selectClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const radioGroupClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  color: semanticVars.color.textColor,

  selectors: {
    '&[data-orientation=horizontal]': {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
})

globalStyle(`${radioGroupClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

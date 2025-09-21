import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { modalClassName } from './modal.css'

export const textFieldClassName = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  color: semanticVars.color.textColor,

  selectors: {
    [`${modalClassName} &`]: {
      marginBottom: '8px'
    }
  }
})

globalStyle(`${textFieldClassName} [slot=description]`, {
  fontSize: '0.857rem'
})

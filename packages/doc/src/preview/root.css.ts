import { globalStyle, style } from '@vanilla-extract/css'

export const rootClassName = style({
  margin: '1rem'
})

globalStyle(`html`, {
  fontFamily: 'system-ui',
  fontSize: '14px',
  lineHeight: 1.5
})

globalStyle('body', {
  margin: 0
})

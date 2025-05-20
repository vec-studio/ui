import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from 'vecui'
import { border } from './side-nav.css'

export const pageHeaderClassName = style({
  borderBottom: border,
  display: 'flex',
  flexDirection: 'column',
  height: '13.142rem',
  justifyContent: 'center',
  paddingInline: '4.571rem'
})
globalStyle(`${pageHeaderClassName} > h2`, {
  color: themeVars.color.gray80,
  fontSize: '3.428rem',
  fontWeight: '800',
  lineHeight: '3.428rem',
  margin: 0
})
globalStyle(`${pageHeaderClassName} > p`, {
  color: themeVars.color.gray60,
  fontSize: '1.428rem',
  fontWeight: '600',
  lineHeight: '2rem',
  margin: '0.857rem 0 0 0'
})

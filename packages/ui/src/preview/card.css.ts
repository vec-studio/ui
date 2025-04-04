import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'

export const cardClassName = style({
  border: `1px solid rgb(245, 245, 245)`,
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '15rem',
  padding: '1rem'
})

export const cardTitleClassName = style({
  fontWeight: '700',
  lineHeight: '1.3',
  marginBottom: '1rem'
})

export const cardContentClassName = style({
  flex: 1
})

globalStyle(`${cardClassName} hr`, {
  display: 'none',
  backgroundColor: themeVars.color.gray100,
  blockSize: '0.285rem',
  border: 'none',
  borderRadius: '0.142rem',
  marginBottom: '1rem',
  width: '100%'
})

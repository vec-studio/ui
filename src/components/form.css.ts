import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const formClassName = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '8px'
})

globalStyle(`${formClassName} [role=start]`, {
  border: `2px solid ${themeVars.color.invalidColor}`,
  background: themeVars.color.overlayBackground,
  borderRadius: '6px',
  padding: '12px',
  maxWidth: '250px',
  outline: 'none'
})

globalStyle(`${formClassName} [role=start]:focus-visible`, {
  outline: `2px solid ${themeVars.color.focusRingColor}`,
  outlineOffset: '2px'
})

globalStyle(`${formClassName} [role=start] h3`, {
  marginTop: '0'
})

globalStyle(`${formClassName} [role=start] p`, {
  marginBottom: '0'
})

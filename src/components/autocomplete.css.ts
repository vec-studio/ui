import { style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const autocompleteClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: '300px',
  height: '180px',
  border: `1px solid ${themeVars.color.borderColor}`,
  padding: '16px',
  borderRadius: '10px',
  background: themeVars.color.overlayBackground
})

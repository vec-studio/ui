import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const autocompleteClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: '300px',
  height: '180px',
  border: `1px solid ${semanticVars.color.borderColor}`,
  padding: '16px',
  borderRadius: '10px',
  background: semanticVars.color.overlayBackground
})

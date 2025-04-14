import { style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const treeClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  overflow: 'auto',
  padding: '4px',
  border: `1px solid ${semanticVars.color.borderColor}`,
  borderRadius: '6px',
  background: semanticVars.color.overlayBackground,
  forcedColorAdjust: 'none',
  outline: 'none',
  width: '250px',
  maxHeight: '300px',
  boxSizing: 'border-box',

  selectors: {
    '&[data-focus-visible]': {
      outline: '2px solid var(--focus-ring-color)',
      outlineOffset: '-1px'
    }
  }
})

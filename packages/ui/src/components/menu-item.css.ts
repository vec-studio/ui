import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'

export const menuItemClassName = style({
  margin: '2px',
  padding: '0.286rem 0.571rem',
  borderRadius: '6px',
  outline: 'none',
  cursor: 'default',
  color: semanticVars.color.textColor,
  fontSize: '1.072rem',
  position: 'relative',
  display: 'grid',
  gridTemplateAreas: '"label kbd" "desc kbd"',
  alignItems: 'center',
  columnGap: '20px',
  forcedColorAdjust: 'none',

  selectors: {
    '&[data-focused]': {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    '&[data-selection-mode]': {
      paddingLeft: '24px'
    },
    '&[data-selection-mode]::before': {
      position: 'absolute',
      left: '4px',
      fontWeight: 600
    },
    '&[data-selection-mode][data-selection-mode=multiple][data-selected]::before': {
      content: '✓',
      position: 'absolute',
      left: '4px',
      fontWeight: 600
    },
    '&[data-selection-mode][data-selection-mode=single][data-selected]::before': {
      content: '●',
      transform: 'scale(0.7)'
    },
    '&[href]': {
      textDecoration: 'none',
      cursor: 'pointer'
    },
    '&[data-disabled]': {
      color: semanticVars.color.textColorDisabled
    }
  }
})

globalStyle(`${menuItemClassName} [slot=label]`, {
  fontWeight: 'bold',
  gridArea: 'label'
})

globalStyle(`${menuItemClassName} [slot=description]`, {
  fontSize: 'small',
  gridArea: 'desc'
})

globalStyle(`${menuItemClassName} kbd`, {
  gridArea: 'kbd',
  fontFamily: 'monospace',
  textAlign: 'end'
})

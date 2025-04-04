import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars } from '../theme.css'
import { tagListClassName } from './tag-list.css'

export const tagClassName = style({
  color: semanticVars.color.textColor,
  border: `1px solid ${semanticVars.color.borderColor}`,
  forcedColorAdjust: 'none',
  borderRadius: '4px',
  padding: '2px 8px',
  fontSize: '0.929rem',
  outline: 'none',
  cursor: 'default',
  display: 'flex',
  alignItems: 'center',
  transition: 'border-color 200ms',

  selectors: {
    '&[data-hovered]': {
      borderColor: semanticVars.color.borderColorHover
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-selected]': {
      borderColor: semanticVars.color.highlightBackground,
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    '&[data-href]': {
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }
})

globalStyle(`${tagClassName} [slot=remove]`, {
  background: 'none',
  border: 'none',
  padding: '0',
  marginLeft: '8px',
  color: semanticVars.color.textColorBase,
  transition: 'color 200ms',
  outline: 'none',
  fontSize: '0.95em'
})

globalStyle(`${tagClassName} [slot=remove][data-hovered]`, {
  color: semanticVars.color.textColorHover
})

globalStyle(`${tagClassName}[data-selected] [slot=remove]`, {
  color: 'inherit'
})

// tag list
globalStyle(`${tagListClassName} ${tagClassName}[data-disabled]`, {
  borderColor: semanticVars.color.borderColorDisabled,
  color: semanticVars.color.textColorDisabled
})

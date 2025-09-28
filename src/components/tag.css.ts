import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { tagListClassName } from './tag-list.css'

export const tagClassName = style({
  color: themeVars.color.textColor,
  border: `1px solid ${themeVars.color.borderColor}`,
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
      borderColor: themeVars.color.borderColorHover
    },
    '&[data-focus-visible]': {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    '&[data-selected]': {
      borderColor: themeVars.color.highlightBackground,
      background: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground
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
  color: themeVars.color.textColorBase,
  transition: 'color 200ms',
  outline: 'none',
  fontSize: '0.95em'
})

globalStyle(`${tagClassName} [slot=remove][data-hovered]`, {
  color: themeVars.color.textColorHover
})

globalStyle(`${tagClassName}[data-selected] [slot=remove]`, {
  color: 'inherit'
})

// tag list
globalStyle(`${tagListClassName} ${tagClassName}[data-disabled]`, {
  borderColor: themeVars.color.borderColorDisabled,
  color: themeVars.color.textColorDisabled
})

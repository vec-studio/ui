import { globalStyle, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'
import { dropIndicatorClassName } from './drop-indicator.css'
import { gridListItemClassName } from './grid-list-item.css'

export const gridListClassName = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  maxHeight: 'inherit',
  overflow: 'auto',
  padding: '4px',
  border: `1px solid ${themeVars.color.borderColor}`,
  borderRadius: '6px',
  background: themeVars.color.overlayBackground,
  forcedColorAdjust: 'none',
  outline: 'none',
  width: '250px',
  minHeight: '100px',
  boxSizing: 'border-box',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    },
    '&[data-empty]': {
      alignItems: 'center',
      justifyContent: 'center',
      fontStyle: 'italic'
    },
    '&[data-drop-target]': {
      outline: `2px solid ${themeVars.color.highlightBackground}`,
      outlineOffset: '-1px',
      background: themeVars.color.highlightOverlay
    }
  }
})

globalStyle(
  `${gridListItemClassName}[data-selected]:has(+ [data-selected]), ${gridListItemClassName}[data-selected]:has(+ ${dropIndicatorClassName} + [data-selected], ${gridListItemClassName}[data-selected] + [data-selected], .${gridListItemClassName}[data-selected] + ${dropIndicatorClassName} + [data-selected])`,
  {
    '@supports': {
      'selector(:has(.foo))': {
        gap: '0',
        borderEndStartRadius: '0',
        borderEndEndRadius: '0'
      }
    }
  }
)

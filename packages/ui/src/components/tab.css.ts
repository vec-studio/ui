import { createVar, style } from '@vanilla-extract/css'
import { tabListClassName } from './tab-list.css'
import { semanticVars } from '../theme.css'

export const tabBorderColorVar = createVar()

export const tabClassName = style({
  vars: {
    [tabBorderColorVar]: 'transparent'
  },

  padding: '10px',
  cursor: 'default',
  outline: 'none',
  position: 'relative',
  color: semanticVars.color.textColorBase,
  transition: 'color 200ms',
  forcedColorAdjust: 'none',

  selectors: {
    [`${tabListClassName}[data-orientation=horizontal] &`]: {
      borderBottom: `3px solid ${tabBorderColorVar}`
    },
    '&[data-hovered], &[data-focused]': {
      color: semanticVars.color.textColorHover
    },
    '&[data-selected]': {
      vars: {
        [tabBorderColorVar]: semanticVars.color.highlightBackground
      },
      color: semanticVars.color.textColor
    },
    '&[data-disabled]': {
      color: semanticVars.color.textColorDisabled
    },
    '&[data-disabled][data-selected]': {
      vars: {
        [tabBorderColorVar]: semanticVars.color.textColorDisabled
      }
    },
    '&[data-focus-visible]::after': {
      content: '',
      position: 'absolute',
      inset: '4px',
      borderRadius: '4px',
      border: `2px solid ${semanticVars.color.focusRingColor}`
    },
    [`${tabListClassName}[data-orientation=vertical] &`]: {
      borderInlineEnd: `3px solid ${tabBorderColorVar}`
    },
    '&[href]': {
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }
})

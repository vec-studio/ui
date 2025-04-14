import { createVar, style } from '@vanilla-extract/css'
import { treeClassName } from './tree.css'
import { semanticVars, themeVars } from '../theme.css'

export const treeItemPaddingVar = createVar()
export const treeItemFocusRingColorVar = createVar()

export const treeItemClassName = style({
  selectors: {
    [`${treeClassName} &`]: {
      vars: {
        [treeItemPaddingVar]: '8px'
      },
      display: 'flex',
      alignItems: 'center',
      gap: '0.571rem',
      minHeight: '28px',
      padding: '0.286rem 0.286rem 0.286rem 0.571rem',
      borderRadius: '6px',
      outline: 'none',
      cursor: 'default',
      color: semanticVars.color.textColor,
      fontSize: '1.072rem',
      position: 'relative',
      transform: 'translateZ(0)'
    },
    [`${treeClassName} &[data-has-child-items]`]: {
      visibility: 'visible'
    },
    [`${treeClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${treeItemFocusRingColorVar}`,
      outlineOffset: '-2px'
    },
    [`${treeClassName} &[data-pressed]`]: {
      background: themeVars.color.gray10
    },
    [`${treeClassName} &[data-selected]`]: {
      vars: {
        [treeItemFocusRingColorVar]: semanticVars.color.highlightForeground
      },
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    }
  }
})

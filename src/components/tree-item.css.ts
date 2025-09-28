import { createVar, style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import { treeClassName } from './tree.css'

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
      color: themeVars.color.textColor,
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
      background: openProps.gray1
    },
    [`${treeClassName} &[data-selected]`]: {
      vars: {
        [treeItemFocusRingColorVar]: themeVars.color.highlightForeground
      },
      background: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground
    }
  }
})

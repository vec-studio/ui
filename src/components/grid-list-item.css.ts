import { createVar, globalStyle, style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import { gridListClassName } from './grid-list.css'

export const gridListFocusRingColorVar = createVar()

export const gridListItemClassName = style({
  selectors: {
    [`${gridListClassName} &`]: {
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
    [`${gridListClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${gridListFocusRingColorVar}`,
      outlineOffset: '-2px'
    },
    [`${gridListClassName} &[data-pressed]`]: {
      background: openProps.gray1
    },
    [`${gridListClassName} &[data-selected]`]: {
      vars: {
        [gridListFocusRingColorVar]: themeVars.color.highlightForeground
      },
      background: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground
    },
    [`${gridListClassName} &[data-selected][data-focus-visible]`]: {
      outlineColor: themeVars.color.highlightForeground,
      outlineOffset: '-4px'
    },
    [`${gridListClassName} &[data-disabled]`]: {
      color: themeVars.color.textColorDisabled
    },
    // grid list
    [`${gridListClassName} &[data-href]`]: {
      cursor: 'pointer'
    },
    [`${gridListClassName} &[data-allows-dragging]`]: {
      paddingLeft: '4px'
    },
    [`${gridListClassName} &[data-dragging]`]: {
      opacity: '0.6'
    },
    '&[data-drop-target]': {
      outline: `2px solid ${themeVars.color.highlightBackground}`,
      background: themeVars.color.highlightOverlay
    }
  }
})

globalStyle(`${gridListItemClassName} [slot=drag]`, {
  all: 'unset',
  width: '15px',
  textAlign: 'center'
})

globalStyle(`${gridListItemClassName} [slot=drag][data-focus-visible]`, {
  borderRadius: '4px',
  outline: `2px solid ${gridListFocusRingColorVar}`
})

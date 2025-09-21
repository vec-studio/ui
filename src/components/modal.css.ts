import { createVar, keyframes, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'

export const modalFade = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

export const modalZoom = keyframes({
  from: {
    transform: 'scale(0.8)'
  },
  to: {
    transform: 'scale(1)'
  }
})

export const modalOverlayHeightVar = createVar()

export const modalOverlayClassName = style({
  vars: {
    [modalOverlayHeightVar]: 'auto'
  },

  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: modalOverlayHeightVar,
  background: 'rgba(0 0 0 / .5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,

  selectors: {
    '&[data-entering]': {
      animation: `${modalFade} 200ms`
    },
    '&[data-exiting]': {
      animation: `${modalFade} 150ms reverse ease-in`
    }
  }
})

export const modalClassName = style({
  boxShadow: '0 8px 20px rgba(0 0 0 / 0.1)',
  borderRadius: '6px',
  background: semanticVars.color.overlayBackground,
  color: semanticVars.color.textColor,
  border: `1px solid ${themeVars.color.gray40}`,
  outline: 'none',
  maxWidth: '300px',

  selectors: {
    '&[data-entering]': {
      animation: `${modalZoom} 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`
    }
  }
})

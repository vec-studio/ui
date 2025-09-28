import { createVar, style } from '@vanilla-extract/css'
import { themeVars } from '../theme'

export const tooltipOriginVar = createVar()

export const tooltipClassName = style({
  boxShadow: '0 8px 20px rgba(0 0 0 / 0.1)',
  borderRadius: '4px',
  background: themeVars.color.highlightBackground,
  color: themeVars.color.highlightForeground,
  forcedColorAdjust: 'none',
  outline: 'none',
  padding: '2px 8px',
  maxWidth: '150px',

  selectors: {
    '&[data-entering], &[data-exiting]': {
      transform: tooltipOriginVar,
      opacity: '0'
    },
    '&[data-placement=top]': {
      vars: {
        [tooltipOriginVar]: 'translateY(4px)'
      },
      marginBottom: '8px'
    },
    '&[data-placement=bottom]': {
      vars: {
        [tooltipOriginVar]: 'translateY(-4px)'
      },
      marginTop: '8px'
    },
    '&[data-placement=right]': {
      vars: {
        [tooltipOriginVar]: 'translateX(-4px)'
      },
      marginLeft: '8px'
    },
    '&[data-placement=left]': {
      vars: {
        [tooltipOriginVar]: 'translateX(4px)'
      },
      marginRight: '8px'
    }
  }
})

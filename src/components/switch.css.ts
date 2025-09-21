import { style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'

export const switchClassName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.571rem',
  fontSize: '1.143rem',
  color: semanticVars.color.textColor,
  forcedColorAdjust: 'none',

  selectors: {
    '&[data-disabled]': {
      color: semanticVars.color.textColorDisabled
    }
  }
})

export const indicatorClassName = style({
  selectors: {
    [`${switchClassName} &`]: {
      width: '2rem',
      height: '1.143rem',
      border: `2px solid ${semanticVars.color.borderColor}`,
      background: themeVars.color.backgroundColor,
      borderRadius: '1.143rem',
      transition: 'all 200ms'
    },
    [`${switchClassName} &:before`]: {
      content: '""',
      display: 'block',
      margin: '0.143rem',
      width: '0.857rem',
      height: '0.857rem',
      background: semanticVars.color.highlightBackground,
      borderRadius: '16px',
      transition: 'all 200ms'
    },
    [`${switchClassName}[data-pressed] &`]: {
      borderColor: semanticVars.color.borderColorPressed
    },
    [`${switchClassName}[data-pressed] &:before`]: {
      background: semanticVars.color.highlightBackgroundPressed
    },
    [`${switchClassName}[data-selected] &`]: {
      borderColor: semanticVars.color.highlightBackground,
      background: semanticVars.color.highlightBackground
    },
    [`${switchClassName}[data-selected] &:before`]: {
      background: semanticVars.color.fieldBackground,
      transform: 'translateX(100%)'
    },
    [`${switchClassName}[data-selected][data-pressed] &`]: {
      borderColor: semanticVars.color.highlightBackgroundPressed,
      background: semanticVars.color.highlightBackgroundPressed
    },
    [`${switchClassName}[data-focus-visible] &`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    [`${switchClassName}[data-disabled] &`]: {
      borderColor: semanticVars.color.borderColorDisabled
    },
    [`${switchClassName}[data-disabled] &:before`]: {
      background: semanticVars.color.borderColorDisabled
    }
  }
})

import { style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'

export const switchClassName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.571rem',
  fontSize: '1.143rem',
  color: themeVars.color.textColor,
  forcedColorAdjust: 'none',

  selectors: {
    '&[data-disabled]': {
      color: themeVars.color.textColorDisabled
    }
  }
})

export const indicatorClassName = style({
  selectors: {
    [`${switchClassName} &`]: {
      width: '2rem',
      height: '1.143rem',
      border: `2px solid ${themeVars.color.borderColor}`,
      background: openProps.gray1,
      borderRadius: '1.143rem',
      transition: 'all 200ms'
    },
    [`${switchClassName} &:before`]: {
      content: '""',
      display: 'block',
      margin: '0.143rem',
      width: '0.857rem',
      height: '0.857rem',
      background: themeVars.color.highlightBackground,
      borderRadius: '16px',
      transition: 'all 200ms'
    },
    [`${switchClassName}[data-pressed] &`]: {
      borderColor: themeVars.color.borderColorPressed
    },
    [`${switchClassName}[data-pressed] &:before`]: {
      background: themeVars.color.highlightBackgroundPressed
    },
    [`${switchClassName}[data-selected] &`]: {
      borderColor: themeVars.color.highlightBackground,
      background: themeVars.color.highlightBackground
    },
    [`${switchClassName}[data-selected] &:before`]: {
      background: themeVars.color.fieldBackground,
      transform: 'translateX(100%)'
    },
    [`${switchClassName}[data-selected][data-pressed] &`]: {
      borderColor: themeVars.color.highlightBackgroundPressed,
      background: themeVars.color.highlightBackgroundPressed
    },
    [`${switchClassName}[data-focus-visible] &`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    [`${switchClassName}[data-disabled] &`]: {
      borderColor: themeVars.color.borderColorDisabled
    },
    [`${switchClassName}[data-disabled] &:before`]: {
      background: themeVars.color.borderColorDisabled
    }
  }
})

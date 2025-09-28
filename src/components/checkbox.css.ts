import { createVar, globalStyle, style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import { gridListItemClassName } from './grid-list-item.css'

export const checkboxBackgroundColorVar = createVar()
export const checkboxCheckmarkColorVar = createVar()
export const checkboxSelectedColorPressedVar = createVar()
export const checkboxSelectedColorVar = createVar()

export const checkboxClassName = style({
  vars: {
    [checkboxSelectedColorVar]: themeVars.color.highlightBackground,
    [checkboxSelectedColorPressedVar]: themeVars.color.highlightBackgroundPressed,
    [checkboxCheckmarkColorVar]: themeVars.color.highlightForeground
  },

  alignItems: 'center',
  color: themeVars.color.textColor,
  display: 'flex',
  fontSize: '1.143rem',
  forcedColorAdjust: 'none',
  gap: '.571rem',

  selectors: {
    [`&[data-disabled]`]: {
      color: themeVars.color.textColorDisabled
    }
  }
})

export const checkboxCheckboxClassName = style({
  selectors: {
    [`${checkboxClassName} &`]: {
      width: '1.143rem',
      height: '1.143rem',
      border: `2px solid ${themeVars.color.borderColor}`,
      borderRadius: '4px',
      transition: 'all 200ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0'
    },
    [`${checkboxClassName}[data-pressed] &`]: {
      borderColor: checkboxSelectedColorPressedVar
    },
    [`${checkboxClassName}[data-focus-visible] &`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    [`${checkboxClassName}[data-indeterminate] &`]: {
      borderColor: checkboxSelectedColorVar,
      background: checkboxSelectedColorVar
    },
    [`${checkboxClassName}[data-indeterminate][data-pressed] &`]: {
      borderColor: checkboxSelectedColorPressedVar,
      background: checkboxSelectedColorPressedVar
    },
    [`${checkboxClassName}[data-selected] &`]: {
      borderColor: checkboxSelectedColorVar,
      background: checkboxSelectedColorVar
    },
    [`${checkboxClassName}[data-selected][data-pressed] &`]: {
      borderColor: checkboxSelectedColorPressedVar,
      background: checkboxSelectedColorPressedVar
    },
    [`${checkboxClassName}[data-invalid] &`]: {
      [checkboxCheckmarkColorVar]: openProps.gray1,
      borderColor: themeVars.color.invalidColor
    },
    [`${checkboxClassName}[data-invalid][data-pressed] &`]: {
      borderColor: themeVars.color.invalidColorPressed
    },
    [`${checkboxClassName}[data-selected][data-indeterminate] &`]: {
      background: themeVars.color.invalidColor
    },
    [`${checkboxClassName}[data-pressed] &`]: {
      background: themeVars.color.invalidColorPressed
    },
    [`${checkboxClassName}[data-disabled] &`]: {
      borderColor: themeVars.color.borderColorDisabled
    },
    // grid list
    [`:where(${gridListItemClassName}) &`]: {
      vars: {
        [checkboxSelectedColorVar]: themeVars.color.highlightForeground,
        [checkboxSelectedColorPressedVar]: themeVars.color.highlightForegroundPressed,
        [checkboxCheckmarkColorVar]: themeVars.color.highlightBackground,
        [checkboxBackgroundColorVar]: themeVars.color.highlightBackground
      }
    }
  }
})

globalStyle(`${checkboxClassName} svg`, {
  width: '1rem',
  height: '1rem',
  fill: 'none',
  stroke: checkboxCheckmarkColorVar,
  strokeWidth: '3px',
  strokeDasharray: '22px',
  strokeDashoffset: '66px',
  transition: 'all 200ms'
})

globalStyle(`${checkboxClassName}[data-selected] svg`, {
  strokeDashoffset: '44px'
})

globalStyle(`${checkboxClassName}[data-indeterminate] svg`, {
  strokeDashoffset: '44px'
})

globalStyle(`${checkboxClassName}[data-indeterminate] svg`, {
  stroke: 'none',
  fill: checkboxCheckmarkColorVar
})

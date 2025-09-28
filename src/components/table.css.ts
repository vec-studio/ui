import { createVar, style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import {
  checkboxBackgroundColorVar,
  checkboxCheckmarkColorVar,
  checkboxSelectedColorPressedVar,
  checkboxSelectedColorVar
} from './checkbox.css'

const focusRingColor = createVar()
const radiusBottom = createVar()
const radiusTop = createVar()

export const tableClassName = style({
  alignSelf: 'start',
  background: themeVars.color.overlayBackground,
  border: `1px solid ${themeVars.color.borderColor}`,
  borderRadius: '6px',
  borderSpacing: 0,
  forcedColorAdjust: 'none',
  maxWidth: '100%',
  minHeight: '100px',
  outline: 'none',
  padding: '0.286rem',
  wordBreak: 'break-word',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    }
  }
})

export const tableHeaderClassName = style({
  color: `${themeVars.color.textColor}`,
  selectors: {
    '&:after': {
      content: '',
      display: 'table-row',
      height: '2px'
    }
  }
})

export const tableRowClassName = style({
  vars: {
    [radiusBottom]: '6px',
    [radiusTop]: '6px'
  },

  borderRadius: `${radiusTop} ${radiusTop} ${radiusBottom} ${radiusBottom}`,
  clipPath: `inset(0 round ${radiusTop})`,
  color: themeVars.color.textColor,
  cursor: 'default',
  fontSize: '1.072rem',
  outline: 'none',
  position: 'relative',
  transform: 'scale(1)',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '-2px'
    },
    '&[data-pressed]': {
      background: openProps.gray1
    },
    '&[data-selected]': {
      vars: {
        [focusRingColor]: themeVars.color.highlightForeground
      },
      background: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground
    },
    '&[data-selected][data-focus-visible]': {
      outlineOffset: '-4px'
    },
    '&[data-disabled]': {
      color: themeVars.color.textColorDisabled
    }
  }
})

export const tableCellClassName = style({
  outline: 'none',
  padding: '4px 8px',
  textAlign: 'left',
  transform: 'translateZ(0)',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${focusRingColor}`,
      outlineOffset: '-2px'
    },

    '&:first-child': {
      borderRadius: `${radiusTop} 0 0 ${radiusBottom}`
    },

    '&:last-child': {
      borderRadius: `0 ${radiusTop} ${radiusBottom} 0`
    }
  }
})

export const tableColumnClassName = style({
  padding: '4px 8px',
  textAlign: 'left',
  outline: 'none',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${focusRingColor}`,
      outlineOffset: '-2px'
    },
    [`${tableRowClassName} &[data-focus-visible]`]: {
      outlineOffset: '-4px'
    },
    [`${tableHeaderClassName} tr:last-child &`]: {
      borderBottom: `1px solid ${themeVars.color.borderColor}`,
      cursor: 'default'
    }
  }
})

export const tableCheckboxClassName = style({
  selectors: {
    [`:where(${tableRowClassName}) &`]: {
      vars: {
        [checkboxSelectedColorVar]: themeVars.color.highlightForeground,
        [checkboxSelectedColorPressedVar]: themeVars.color.highlightForegroundPressed,
        [checkboxCheckmarkColorVar]: themeVars.color.highlightBackground,
        [checkboxBackgroundColorVar]: themeVars.color.highlightBackground
      }
    }
  }
})

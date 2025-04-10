import { createVar, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'
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
  background: semanticVars.color.overlayBackground,
  border: `1px solid ${semanticVars.color.borderColor}`,
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
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-1px'
    }
  }
})

export const tableHeaderClassName = style({
  color: `${semanticVars.color.textColor}`,
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
  color: semanticVars.color.textColor,
  cursor: 'default',
  fontSize: '1.072rem',
  outline: 'none',
  position: 'relative',
  transform: 'scale(1)',

  selectors: {
    '&[data-focus-visible]': {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '-2px'
    },
    '&[data-pressed]': {
      background: themeVars.color.gray10
    },
    '&[data-selected]': {
      vars: {
        [focusRingColor]: semanticVars.color.highlightForeground
      },
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    '&[data-selected][data-focus-visible]': {
      outlineOffset: '-4px'
    },
    '&[data-disabled]': {
      color: semanticVars.color.textColorDisabled
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
      borderBottom: `1px solid ${semanticVars.color.borderColor}`,
      cursor: 'default'
    }
  }
})

export const tableCheckboxClassName = style({
  selectors: {
    [`:where(${tableRowClassName}) &`]: {
      vars: {
        [checkboxSelectedColorVar]: semanticVars.color.highlightForeground,
        [checkboxSelectedColorPressedVar]: semanticVars.color.highlightForegroundPressed,
        [checkboxCheckmarkColorVar]: semanticVars.color.highlightBackground,
        [checkboxBackgroundColorVar]: semanticVars.color.highlightBackground
      }
    }
  }
})

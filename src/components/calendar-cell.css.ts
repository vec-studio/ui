import { globalStyle, style } from '@vanilla-extract/css'
import openProps from 'open-props'
import { themeVars } from '../theme'
import { calendarClassName } from './calendar.css'
import { rangeCalendarClassName } from './range-calendar.css'

export const calendarCellClassName = style({
  selectors: {
    // calendar
    [`${calendarClassName} &`]: {
      width: '2rem',
      lineHeight: '2rem',
      textAlign: 'center',
      borderRadius: '6px',
      cursor: 'default',
      outline: 'none',
      margin: '1px',
      forcedColorAdjust: 'none'
    },
    [`${calendarClassName} &[data-outside-month]`]: {
      display: 'none'
    },
    [`${calendarClassName} &[data-pressed]`]: {
      background: openProps.gray1
    },
    [`${calendarClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${themeVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    [`${calendarClassName} &[data-selected]`]: {
      background: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground
    },
    [`${calendarClassName} &[data-disabled]`]: {
      color: themeVars.color.textColorDisabled
    },
    [`${calendarClassName} &[data-unavailable]`]: {
      textDecoration: 'line-through',
      color: themeVars.color.invalidColor
    },
    [`${calendarClassName} &[data-invalid]`]: {
      background: themeVars.color.invalidColor,
      color: themeVars.color.highlightForeground
    },
    // range calendar
    [`${rangeCalendarClassName} &`]: {
      width: '2.286rem',
      lineHeight: '2.286rem',
      textAlign: 'center',
      borderRadius: '6px',
      cursor: 'default',
      outline: 'none',
      forcedColorAdjust: 'none'
    },
    [`${rangeCalendarClassName} &[data-outside-month]`]: {
      display: 'none'
    },
    [`${rangeCalendarClassName} &[data-pressed]`]: {
      background: openProps.gray1
    },
    [`${rangeCalendarClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${themeVars.color.highlightBackground}`,
      outlineOffset: '-2px'
    },
    [`${rangeCalendarClassName} &[data-selected]`]: {
      background: themeVars.color.highlightBackground,
      color: themeVars.color.highlightForeground,
      borderRadius: 0
    },
    [`${rangeCalendarClassName} &[data-selected][data-focus-visible]`]: {
      outlineColor: themeVars.color.highlightBackground,
      outlineOffset: '-3px'
    },
    [`${rangeCalendarClassName} &[data-selection-start]`]: {
      borderStartStartRadius: '6px',
      borderEndStartRadius: '6px'
    },
    [`${rangeCalendarClassName} &[data-selection-end]`]: {
      borderStartEndRadius: '6px',
      borderEndEndRadius: '6px'
    },
    [`${rangeCalendarClassName} &[data-disabled]`]: {
      color: themeVars.color.textColorDisabled
    },
    [`${rangeCalendarClassName} &[data-unavailable]`]: {
      textDecoration: 'line-through',
      color: themeVars.color.invalidColor
    },
    [`${rangeCalendarClassName} &[data-invalid]`]: {
      background: themeVars.color.invalidColor,
      color: themeVars.color.highlightForeground
    }
  }
})

globalStyle(`${calendarClassName} [slot=errorMessage]`, {
  fontSize: '0.857rem',
  color: themeVars.color.invalidColor
})

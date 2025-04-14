import { globalStyle, style } from '@vanilla-extract/css'
import { semanticVars, themeVars } from '../theme.css'
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
      background: themeVars.color.gray10
    },
    [`${calendarClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${semanticVars.color.focusRingColor}`,
      outlineOffset: '2px'
    },
    [`${calendarClassName} &[data-selected]`]: {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground
    },
    [`${calendarClassName} &[data-disabled]`]: {
      color: semanticVars.color.textColorDisabled
    },
    [`${calendarClassName} &[data-unavailable]`]: {
      textDecoration: 'line-through',
      color: semanticVars.color.invalidColor
    },
    [`${calendarClassName} &[data-invalid]`]: {
      background: semanticVars.color.invalidColor,
      color: semanticVars.color.highlightForeground
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
      background: themeVars.color.gray10
    },
    [`${rangeCalendarClassName} &[data-focus-visible]`]: {
      outline: `2px solid ${semanticVars.color.highlightBackground}`,
      outlineOffset: '-2px'
    },
    [`${rangeCalendarClassName} &[data-selected]`]: {
      background: semanticVars.color.highlightBackground,
      color: semanticVars.color.highlightForeground,
      borderRadius: 0
    },
    [`${rangeCalendarClassName} &[data-selected][data-focus-visible]`]: {
      outlineColor: semanticVars.color.highlightBackground,
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
      color: semanticVars.color.textColorDisabled
    },
    [`${rangeCalendarClassName} &[data-unavailable]`]: {
      textDecoration: 'line-through',
      color: semanticVars.color.invalidColor
    },
    [`${rangeCalendarClassName} &[data-invalid]`]: {
      background: semanticVars.color.invalidColor,
      color: semanticVars.color.highlightForeground
    }
  }
})

globalStyle(`${calendarClassName} [slot=errorMessage]`, {
  fontSize: '0.857rem',
  color: semanticVars.color.invalidColor
})

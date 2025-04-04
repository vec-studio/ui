import { style } from '@vanilla-extract/css'
import { calendarClassName } from './calendar.css'
import { dialogClassName } from './dialog.css'
import { rangeCalendarClassName } from './range-calendar.css'

export const headingClassName = style({
  selectors: {
    [`${dialogClassName} &`]: {
      lineHeight: '1em',
      marginTop: '0'
    },
    // calendar
    [`${calendarClassName} header &`]: {
      flex: 1,
      margin: 0,
      textAlign: 'center',
      fontSize: '1.375rem'
    },
    // range calendar
    [`${rangeCalendarClassName} header &`]: {
      flex: 1,
      margin: 0,
      textAlign: 'center',
      fontSize: '1.375rem'
    }
  }
})

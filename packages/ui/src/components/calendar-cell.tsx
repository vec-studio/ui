import { CalendarCell as RACCalendarCell, type CalendarCellProps as RACCalendarCellProps } from 'react-aria-components'
import { calendarCellClassName } from './calendar-cell.css'
import { cn } from './utils'

export type CalendarCellProps = RACCalendarCellProps

export function CalendarCell(props: CalendarCellProps) {
  return <RACCalendarCell {...props} className={cn(props.className, calendarCellClassName)} />
}

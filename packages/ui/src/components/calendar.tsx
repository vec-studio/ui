import { Calendar as RACCalendar, type DateValue, type CalendarProps as RACCalendarProps } from 'react-aria-components'
import { Button } from './button'
import { CalendarCell } from './calendar-cell'
import { CalendarGrid } from './calendar-grid'
import { calendarClassName } from './calendar.css'
import { Heading } from './heading'
import { Text } from './text'
import { cn } from './utils'

export interface CalendarProps<T extends DateValue> extends RACCalendarProps<T> {
  errorMessage?: string
}

export function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>) {
  return (
    <RACCalendar {...props} className={cn(props.className, calendarClassName)}>
      <header>
        <Button slot="previous">◀</Button>
        <Heading />
        <Button slot="next">▶</Button>
      </header>
      <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RACCalendar>
  )
}

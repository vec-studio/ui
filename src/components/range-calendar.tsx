import {
  type DateValue,
  RangeCalendar as RACRangeCalendar,
  RangeCalendarProps as RACRangeCalendarProps
} from 'react-aria-components'
import { Button } from './button'
import { CalendarCell } from './calendar-cell'
import { CalendarGrid } from './calendar-grid'
import { Heading } from './heading'
import { rangeCalendarClassName } from './range-calendar.css'
import { Text } from './text'
import { cn } from './utils'

export interface RangeCalendarProps<T extends DateValue> extends RACRangeCalendarProps<T> {
  errorMessage?: string
}

export function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>) {
  return (
    <RACRangeCalendar {...props} className={cn(props.className, rangeCalendarClassName)}>
      <header>
        <Button slot="previous">◀</Button>
        <Heading />
        <Button slot="next">▶</Button>
      </header>
      <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RACRangeCalendar>
  )
}

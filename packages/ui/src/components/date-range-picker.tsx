import {
  Popover,
  DateRangePicker as RACDateRangePicker,
  DateRangePickerProps as RACDateRangePickerProps,
  type ValidationResult,
  type DateValue
} from 'react-aria-components'
import { Button } from './button'
import { CalendarCell } from './calendar-cell'
import { CalendarGrid } from './calendar-grid'
import { DateInput } from './date-input'
import { dateRangePickerClassName } from './date-range-picker.css'
import { DateSegment } from './date-segment'
import { Dialog } from './dialog'
import { FieldError } from './field-error'
import { Group } from './group'
import { Heading } from './heading'
import { Label } from './label'
import { popoverClassName } from './popover.css'
import { RangeCalendar } from './range-calendar'
import { Text } from './text'
import { cn } from './utils'

export interface DateRangePickerProps<T extends DateValue> extends RACDateRangePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <RACDateRangePicker {...props} className={cn(props.className, dateRangePickerClassName)}>
      <Label>{label}</Label>
      <Group>
        <DateInput slot="start">{segment => <DateSegment segment={segment} />}</DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">{segment => <DateSegment segment={segment} />}</DateInput>
        <Button>▼</Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className={popoverClassName}>
        <Dialog>
          <RangeCalendar firstDayOfWeek={firstDayOfWeek}>
            <header>
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </RACDateRangePicker>
  )
}

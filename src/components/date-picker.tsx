import {
  type DateValue,
  Popover,
  DatePicker as RACDatePicker,
  type DatePickerProps as RACDatePickerProps,
  type ValidationResult
} from 'react-aria-components'
import { Button } from './button'
import { Calendar } from './calendar'
import { CalendarCell } from './calendar-cell'
import { CalendarGrid } from './calendar-grid'
import { DateInput } from './date-input'
import { datePickerClassName } from './date-picker.css'
import { DateSegment } from './date-segment'
import { Dialog } from './dialog'
import { FieldError } from './field-error'
import { Group } from './group'
import { Heading } from './heading'
import { Label } from './label'
import { popoverClassName } from './popover.css'
import { Text } from './text'
import { cn } from './utils'

export interface DatePickerProps<T extends DateValue> extends RACDatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: DatePickerProps<T>) {
  return (
    <RACDatePicker {...props} className={cn(props.className, datePickerClassName)}>
      <Label>{label}</Label>
      <Group>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Button>▼</Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className={popoverClassName}>
        <Dialog>
          <Calendar firstDayOfWeek={firstDayOfWeek}>
            <header>
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </RACDatePicker>
  )
}

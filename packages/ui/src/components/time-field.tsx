import {
  TimeField as RACTimeField,
  TimeFieldProps as RACTimeFieldProps,
  type TimeValue,
  type ValidationResult
} from 'react-aria-components'
import { DateInput } from './date-input'
import { DateSegment } from './date-segment'
import { FieldError } from './field-error'
import { Label } from './label'
import { Text } from './text'
import { timeFieldClassName } from './time-filed.css'
import { cn } from './utils'

export interface TimeFieldProps<T extends TimeValue> extends RACTimeFieldProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TimeField<T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>) {
  return (
    <RACTimeField {...props} className={cn(props.className, timeFieldClassName)}>
      <Label>{label}</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACTimeField>
  )
}

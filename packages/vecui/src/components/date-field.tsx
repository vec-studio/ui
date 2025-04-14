import {
  DateField as RACDateField,
  DateFieldProps as RACDateFieldProps,
  type DateValue,
  type ValidationResult
} from 'react-aria-components'
import { dateFieldClassName } from './date-field.css'
import { DateInput } from './date-input'
import { DateSegment } from './date-segment'
import { FieldError } from './field-error'
import { Label } from './label'
import { Text } from './text'
import { cn } from './utils'

export interface DateFieldProps<T extends DateValue> extends RACDateFieldProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>) {
  return (
    <RACDateField {...props} className={cn(props.className, dateFieldClassName)}>
      <Label>{label}</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACDateField>
  )
}

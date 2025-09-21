import { DateInput as RACDateInput, type DateInputProps as RACDateInputProps } from 'react-aria-components'
import { dateInputClassName } from './date-input.css'
import { cn } from './utils'

export type DateInputProps = RACDateInputProps

export function DateInput(props: DateInputProps) {
  return <RACDateInput {...props} className={cn(props.className, dateInputClassName)} />
}

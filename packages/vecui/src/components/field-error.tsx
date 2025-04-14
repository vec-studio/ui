import { FieldError as RACTextError, type FieldErrorProps as RACFieldErrorProps } from 'react-aria-components'
import { fieldErrorClassName } from './field-error.css'
import { cn } from './utils'

export function FieldError(props: RACFieldErrorProps) {
  return <RACTextError {...props} className={cn(props.className, fieldErrorClassName)} />
}

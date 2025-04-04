import {
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  ValidationResult
} from 'react-aria-components'
import { FieldError } from './field-error'
import { Label } from './label'
import { radioGroupClassName } from './radio-group.css'
import { Text } from './text'
import { cn } from './utils'

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function RadioGroup({ label, description, errorMessage, children, ...props }: RadioGroupProps) {
  return (
    <RACRadioGroup {...props} className={cn(props.className, radioGroupClassName)}>
      <Label>{label}</Label>
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACRadioGroup>
  )
}

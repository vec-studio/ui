import {
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACCheckboxGroupProps,
  ValidationResult
} from 'react-aria-components'
import { FieldError } from './field-error'
import { Label } from './label'
import { Text } from './text'
import { cn } from './utils'
import { checkboxGroupClassName } from './checkbox-group.css'

export interface CheckboxGroupProps extends Omit<RACCheckboxGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function CheckboxGroup({ label, description, errorMessage, children, ...props }: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup {...props} className={cn(props.className, checkboxGroupClassName)}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACCheckboxGroup>
  )
}

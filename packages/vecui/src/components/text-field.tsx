import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
  type ValidationResult
} from 'react-aria-components'
import { FieldError } from './field-error'
import { Input } from './input'
import { Label } from './label'
import { Text } from './text'
import { textFieldClassName } from './text-field.css'
import { cn } from './utils'

export interface TextFieldProps extends RACTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TextField({ label, description, errorMessage, ...props }: TextFieldProps) {
  return (
    <RACTextField {...props} className={cn(props.className, textFieldClassName)}>
      <Label>{label}</Label>
      <Input />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  )
}

import {
  ColorField as RACColorField,
  type ColorFieldProps as RACColorFieldProps,
  ValidationResult
} from 'react-aria-components'
import { colorFieldClassName } from './color-field.css'
import { FieldError } from './field-error'
import { Input } from './input'
import { Label } from './label'
import { Text } from './text'
import { cn } from './utils'

export interface ColorFieldProps extends RACColorFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function ColorField({ label, description, errorMessage, ...props }: ColorFieldProps) {
  return (
    <RACColorField {...props} className={cn(props.className, colorFieldClassName)}>
      {label && <Label>{label}</Label>}
      <Input />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACColorField>
  )
}

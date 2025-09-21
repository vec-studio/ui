import {
  NumberField as RACNumberField,
  type NumberFieldProps as RACNumberFieldProps,
  type ValidationResult
} from 'react-aria-components'
import { Button } from './button'
import { FieldError } from './field-error'
import { Group } from './group'
import { Input } from './input'
import { Label } from './label'
import { numberFieldClassName } from './number-field.css'
import { Text } from './text'
import { cn } from './utils'

export type NumberFieldProps = RACNumberFieldProps & {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function NumberField({ label, description, errorMessage, ...props }: NumberFieldProps) {
  return (
    <RACNumberField {...props} className={cn(props.className, numberFieldClassName)}>
      <Label>{label}</Label>
      <Group>
        <Button slot="decrement">-</Button>
        <Input />
        <Button slot="increment">+</Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACNumberField>
  )
}

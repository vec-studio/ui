import {
  SearchField as RACSearchField,
  SearchFieldProps as RACSearchFieldProps,
  ValidationResult
} from 'react-aria-components'
import { Button } from './button'
import { FieldError } from './field-error'
import { Input } from './input'
import { Label } from './label'
import { searchFieldClassName } from './search-field.css'
import { Text } from './text'
import { cn } from './utils'

export interface SearchFieldProps extends RACSearchFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

export function SearchField({ label, description, errorMessage, placeholder, ...props }: SearchFieldProps) {
  return (
    <RACSearchField {...props} className={cn(props.className, searchFieldClassName)}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      <Button>x</Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RACSearchField>
  )
}

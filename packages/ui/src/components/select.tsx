import {
  Popover,
  Select as RACSelect,
  type SelectProps as RACSelectProps,
  type ValidationResult
} from 'react-aria-components'
import { Button } from './button'
import { FieldError } from './field-error'
import { Label } from './label'
import { ListBox } from './list-box'
import { SelectValue } from './select-value'
import { selectClassName } from './select.css'
import { Text } from './text'
import { cn } from './utils'

export interface SelectProps<T extends object> extends Omit<RACSelectProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <RACSelect {...props} className={cn(props.className, selectClassName)}>
      <Label>{label}</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </RACSelect>
  )
}

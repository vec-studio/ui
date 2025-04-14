import {
  Popover,
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ValidationResult
} from 'react-aria-components'
import { Button } from './button'
import { comboBoxClassName } from './combo-box.css'
import { FieldError } from './field-error'
import { Input } from './input'
import { Label } from './label'
import { ListBox } from './list-box'
import { Text } from './text'
import { cn } from './utils'

export interface ComboBoxProps<T extends object> extends Omit<RACComboBoxProps<T>, 'children'> {
  label?: string
  description?: string | null
  errorMessage?: string | ((validation: ValidationResult) => string)
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function ComboBox<T extends object>({ label, description, errorMessage, children, ...props }: ComboBoxProps<T>) {
  return (
    <RACComboBox {...props} className={cn(props.className, comboBoxClassName)}>
      <Label>{label}</Label>
      <div>
        <Input />
        <Button>▼</Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </RACComboBox>
  )
}

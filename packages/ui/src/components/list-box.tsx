import { ListBox as RACListBox, type ListBoxProps as RACListBoxProps } from 'react-aria-components'
import { listBoxClassName } from './list-box.css'
import { cn } from './utils'

export type ListBoxProps<T> = RACListBoxProps<T>

export function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>) {
  return (
    <RACListBox {...props} className={cn(props.className, listBoxClassName)}>
      {children}
    </RACListBox>
  )
}

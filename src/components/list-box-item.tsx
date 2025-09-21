import { ListBoxItem as RACListBoxItem, type ListBoxItemProps as RACListBoxItemProps } from 'react-aria-components'
import { listBoxItemClassName } from './list-box-item.css'
import { cn } from './utils'

export type ListBoxItemProps = RACListBoxItemProps

export function ListBoxItem(props: ListBoxItemProps) {
  return <RACListBoxItem {...props} className={cn(props.className, listBoxItemClassName)} />
}

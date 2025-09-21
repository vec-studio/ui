import { comboBoxItemClassName } from './combo-box-item.css'
import { ListBoxItem, type ListBoxItemProps } from './list-box-item'
import { cn } from './utils'

export type ComboBoxItemProps = ListBoxItemProps

export function ComboBoxItem(props: ComboBoxItemProps) {
  return <ListBoxItem {...props} className={cn(props.className, comboBoxItemClassName)} />
}

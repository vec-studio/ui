import { ListBoxItem, type ListBoxItemProps } from './list-box-item'
import { selectItemClassName } from './select-item.css'
import { cn } from './utils'

export function SelectItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} className={cn(props.className, selectItemClassName)} />
}

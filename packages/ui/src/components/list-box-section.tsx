import {
  ListBoxSection as RACListBoxSection,
  type ListBoxSectionProps as RACListBoxSectionProps
} from 'react-aria-components'
import { listBoxSectionClassName } from './list-box-section.css'
import { cn } from './utils'

export type ListBoxSectionProps<T> = RACListBoxSectionProps<T>

export function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <RACListBoxSection {...props} className={cn(props.className, listBoxSectionClassName)} />
}

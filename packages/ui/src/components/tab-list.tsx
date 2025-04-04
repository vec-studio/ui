import { TabList as RACTabList, type TabListProps as RACTabListProps } from 'react-aria-components'
import { tabListClassName } from './tab-list.css'
import { cn } from './utils'

export type TabListProps<T> = RACTabListProps<T>

export function TabList<T extends object>(props: TabListProps<T>) {
  return <RACTabList {...props} className={cn(props.className, tabListClassName)} />
}

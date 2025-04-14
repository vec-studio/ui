import { Tabs as RACTabs, TabsProps as RACTabsProps } from 'react-aria-components'
import { tabsClassName } from './tabs.css'
import { cn } from './utils'

export type TabsProps = RACTabsProps

export function Tabs(props: TabsProps) {
  return <RACTabs {...props} className={cn(props.className, tabsClassName)} />
}

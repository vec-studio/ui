import { Tab as RACTab, TabProps as RACTabProps } from 'react-aria-components'
import { tabClassName } from './tab.css'
import { cn } from './utils'

export type TabProps = RACTabProps

export function Tab(props: TabProps) {
  return <RACTab {...props} className={cn(props.className, tabClassName)} />
}

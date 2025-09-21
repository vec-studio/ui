import { TabPanel as RACTabPanel, type TabPanelProps as RACTabPanelProps } from 'react-aria-components'
import { tabPanelClassName } from './tab-panel.css'
import { cn } from './utils'

export type TabPanelProps = RACTabPanelProps

export function TabPanel(props: TabPanelProps) {
  return <RACTabPanel {...props} className={cn(props.className, tabPanelClassName)} />
}

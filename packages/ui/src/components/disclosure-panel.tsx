import {
  DisclosurePanel as RACDisclosurePanel,
  DisclosurePanelProps as RACDisclosurePanelProps
} from 'react-aria-components'
import { disclosurePanelClassName } from './disclosure-panel.css'
import { cn } from './utils'

export type DisclosurePanelProps = RACDisclosurePanelProps

export function DisclosurePanel(props: DisclosurePanelProps) {
  return <RACDisclosurePanel {...props} className={cn(props.className, disclosurePanelClassName)} />
}

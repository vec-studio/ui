import {
  DisclosureGroup as RACDisclosureGroup,
  DisclosureGroupProps as RACDisclosureGroupProps
} from 'react-aria-components'
import { disclosureGroupClassName } from './disclosure-group.css'
import { cn } from './utils'

export type DisclosureGroupProps = RACDisclosureGroupProps

export function DisclosureGroup(props: DisclosureGroupProps) {
  return <RACDisclosureGroup {...props} className={cn(props.className, disclosureGroupClassName)} />
}

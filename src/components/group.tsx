import { Group as RACGroup, type GroupProps as RACGroupProps } from 'react-aria-components'
import { groupClassName } from './group.css'
import { cn } from './utils'

export type GroupProps = RACGroupProps

export function Group(props: GroupProps) {
  return <RACGroup {...props} className={cn(props.className, groupClassName)} />
}

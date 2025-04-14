import { Toolbar as RACToolbar, type ToolbarProps as RACToolbarProps } from 'react-aria-components'
import { toolbarClassName } from './toolbar.css'
import { cn } from './utils'

export type ToolbarProps = RACToolbarProps

export function Toolbar(props: ToolbarProps) {
  return <RACToolbar {...props} className={cn(props.className, toolbarClassName)} />
}

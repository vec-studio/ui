import { type ComponentProps } from 'react'
import { Header as RACHeader } from 'react-aria-components'
import { headerClassName } from './header.css'
import { cn } from './utils'

export type HeaderProps = ComponentProps<typeof RACHeader>

export function Header(props: HeaderProps) {
  return <RACHeader {...props} className={cn(props.className, headerClassName)} />
}

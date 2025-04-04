import { Link as RACLink, type LinkProps } from 'react-aria-components'
import { linkClassName } from './link.css'
import { cn } from './utils'

export function Link(props: LinkProps) {
  return <RACLink {...props} className={cn(props.className, linkClassName)} />
}

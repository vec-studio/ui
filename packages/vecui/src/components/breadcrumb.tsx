import { type BreadcrumbProps as RACBreadcrumbProps, Breadcrumb as RACBreadcrumb } from 'react-aria-components'
import { breadcrumbClassName } from './breadcrumb.css'
import { cn } from './utils'

export type BreadcrumbProps = RACBreadcrumbProps

export function Breadcrumb(props: BreadcrumbProps) {
  return <RACBreadcrumb {...props} className={cn(props.className, breadcrumbClassName)} />
}

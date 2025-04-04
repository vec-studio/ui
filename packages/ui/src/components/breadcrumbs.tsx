import { type BreadcrumbsProps, Breadcrumbs as RACBreadcrumbs } from 'react-aria-components'
import { breadcrumbsClassName } from './breadcrumbs.css'
import { cn } from './utils'

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return <RACBreadcrumbs {...props} className={cn(props.className, breadcrumbsClassName)} />
}

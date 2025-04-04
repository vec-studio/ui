import { Heading as RACHeading, type HeadingProps as RACHeadingProps } from 'react-aria-components'
import { headingClassName } from './heading.css'
import { cn } from './utils'

export function Heading(props: RACHeadingProps) {
  return <RACHeading {...props} className={cn(props.className, headingClassName)} />
}

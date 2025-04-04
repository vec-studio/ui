import { Label as RACLabel, type LabelProps as RACLabelProps } from 'react-aria-components'
import { labelClassName } from './label.css'
import { cn } from './utils'

export function Label(props: RACLabelProps) {
  return <RACLabel {...props} className={cn(props.className, labelClassName)} />
}

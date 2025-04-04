import {
  DropIndicator as RACDropIndicator,
  type DropIndicatorProps as RACDropIndicatorProps
} from 'react-aria-components'
import { dropIndicatorClassName } from './drop-indicator.css'
import { cn } from './utils'

export type DropIndicatorProps = RACDropIndicatorProps

export function DropIndicator(props: DropIndicatorProps) {
  return <RACDropIndicator {...props} className={cn(props.className, dropIndicatorClassName)} />
}

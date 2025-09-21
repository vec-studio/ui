import { OverlayArrow as RACOverlayArrow, type OverlayArrowProps as RACOverlayArrowProps } from 'react-aria-components'
import { overlayArrowClassName } from './overlay-arrow.css'
import { cn } from './utils'

export function OverlayArrow(props: RACOverlayArrowProps) {
  return <RACOverlayArrow {...props} className={cn(props.className, overlayArrowClassName)} />
}

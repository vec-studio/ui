import { type ReactNode } from 'react'
import { Tooltip as RACTooltip, TooltipProps as RACTooltipProps } from 'react-aria-components'
import { OverlayArrow } from './overlay-arrow'
import { tooltipClassName } from './tooltip.css'
import { cn } from './utils'

export interface TooltipProps extends Omit<RACTooltipProps, 'children'> {
  children: ReactNode
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RACTooltip {...props} className={cn(props.className, tooltipClassName)}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </RACTooltip>
  )
}
